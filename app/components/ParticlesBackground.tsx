'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// 네뷸라 셰이더 정의
const nebulaVertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const nebulaFragmentShader = `
uniform float time;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform vec3 color5;
uniform float intensity;
uniform float uScale;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPosition;

// 3D 노이즈 함수
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float cnoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// FBM (Fractal Brownian Motion) - 다중 옥타브 노이즈
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  
  for(int i = 0; i < 6; i++) {
    value += amplitude * cnoise(p * frequency);
    p *= 2.0;
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  
  return value;
}

// 터뷸런스 - 거친 가스층 효과
float turbulence(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  
  for(int i = 0; i < 4; i++) {
    value += amplitude * abs(cnoise(p));
    p *= 2.0;
    amplitude *= 0.5;
  }
  
  return value;
}

void main() {
  // 마우스 인터랙션 추가
  vec3 pos = vPosition;
  pos.xy += uMouse * 0.1; // 마우스로 성운 왜곡
  pos *= 0.8;
  
  // 중심에서의 거리
  float distFromCenter = length(pos);
  
  // 나선팔 패턴 - 더 복잡하게
  float angle = atan(pos.y, pos.x);
  float radius = length(pos.xy);
  float spiralArms = 3.0;
  float spiralTightness = 1.8;
  float spiralOffset = time * 0.08;
  
  // 다중 나선팔
  float spiral1 = sin(spiralArms * (angle + spiralTightness * log(radius + 0.1) + spiralOffset));
  float spiral2 = sin((spiralArms + 1.0) * (angle - spiralTightness * 0.7 * log(radius + 0.1) - spiralOffset * 0.7));
  float spiralPattern = (spiral1 + spiral2 * 0.6) * 0.5;
  
  // FBM 기반 성운 가스
  vec3 timeOffset = vec3(time * 0.02, time * 0.015, time * 0.01);
  float mainGas = fbm(pos * 1.2 + timeOffset);
  float detailGas = fbm(pos * 3.0 + timeOffset * 1.5) * 0.4;
  float microDetail = fbm(pos * 8.0 + timeOffset * 2.0) * 0.2;
  
  // 터뷸런스로 가스층 거칠게
  float gasDistortion = turbulence(pos * 2.0 + timeOffset);
  
  // 전체 가스 밀도
  float gasDensity = mainGas + detailGas + microDetail;
  gasDensity = gasDensity * 0.5 + 0.5; // 0-1 범위로 정규화
  
  // 나선팔과 가스 결합
  float spiralInfluence = smoothstep(-0.3, 0.8, spiralPattern);
  float density = mix(gasDensity * 0.3, gasDensity, spiralInfluence);
  
  // 터뷸런스 추가
  density += gasDistortion * 0.15;
  
  // 소프트 에지 - radial falloff
  float radialFalloff = smoothstep(1.0, 0.4, distFromCenter / uScale);
  density *= radialFalloff;
  
  // 가스 먼지 효과 - 알파 노이즈
  float dustNoise = cnoise(pos * 5.0 + timeOffset * 0.5) * 0.3 + 0.7;
  density *= dustNoise;
  
  // 컬러 그라디언트 매핑
  vec3 color;
  
  // 낮은 밀도 - 어두운 가스 (보라/파랑)
  color = mix(color1, color2, smoothstep(0.0, 0.3, density));
  
  // 중간 밀도 - 밝은 가스 (시안/핑크)
  color = mix(color, color3, smoothstep(0.2, 0.6, density));
  
  // 높은 밀도 - 밝은 핵심 (노랑/오렌지)
  color = mix(color, color4, smoothstep(0.5, 0.8, density));
  
  // 매우 높은 밀도 - 하이라이트 (흰색/노랑)
  float highlight = pow(density, 4.0);
  color = mix(color, color5, highlight * 0.8);
  
  // 나선팔 하이라이트
  float armHighlight = smoothstep(0.6, 1.0, spiralInfluence) * smoothstep(0.4, 0.8, density);
  color = mix(color, color5, armHighlight * 0.3);
  
  // 최종 알파 계산
  float alpha = density * intensity;
  alpha = smoothstep(0.05, 0.9, alpha);
  alpha *= radialFalloff;
  
  // 가스의 자연스러운 투명도
  alpha *= 0.7;
  
  gl_FragColor = vec4(color, alpha);
}`

function NebulaShader() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)
  const { mouse } = useThree()
    const uniforms = useMemo(() => ({
    time: { value: 0 },
    color1: { value: new THREE.Color(0x4c1d95) }, // 보라색 더 밝게
    color2: { value: new THREE.Color(0x1e40af) }, // 파랑색 더 밝게
    color3: { value: new THREE.Color(0x0891b2) }, // 시안 블루 더 밝게
    color4: { value: new THREE.Color(0xf43f5e) }, // 핑크 더 밝게
    color5: { value: new THREE.Color(0xfbbf24) }, // 노란색 하이라이트
    intensity: { value: 1.5 },
    uScale: { value: 1.2 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  }), [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
      // 마우스 위치를 셰이더에 전달
      materialRef.current.uniforms.uMouse.value.x = mouse.x
      materialRef.current.uniforms.uMouse.value.y = mouse.y
    }
    
    if (meshRef.current) {
      // 기본 회전은 더 느리게
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.008
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.005
      
      // 마우스에 따른 추가 회전
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouse.y * 0.1,
        0.05
      )
      meshRef.current.rotation.y += mouse.x * 0.02
    }
  })
  return (
    <mesh ref={meshRef} scale={[15, 15, 15]} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={nebulaVertexShader}
        fragmentShader={nebulaFragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

function InteractiveParticles() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse, viewport } = useThree()
  
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      // 더 넓은 범위에 파티클 배치
      sphere[i * 3] = (Math.random() - 0.5) * 30
      sphere[i * 3 + 1] = (Math.random() - 0.5) * 30
      sphere[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return [sphere]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      
      // 마우스 인터랙션 - 성운과 함께 움직이도록
      const mouseInfluence = 0.6
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mouse.y * mouseInfluence,
        0.08
      )
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * mouseInfluence,
        0.08
      )
      
      // 기본 회전 - 성운과 비슷한 속도
      ref.current.rotation.z = time * 0.02
      
      // 깊이감을 위한 추가 변형
      ref.current.position.x = Math.sin(time * 0.1) * 0.5
      ref.current.position.y = Math.cos(time * 0.08) * 0.3
    }
  })

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function FloatingDots() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  
  const [dots] = useMemo(() => {
    const dots = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      dots[i * 3] = (Math.random() - 0.5) * 45
      dots[i * 3 + 1] = (Math.random() - 0.5) * 45
      dots[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return [dots]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      
      // 마우스 인터랙션 - 다른 레이어와 조금 다르게
      const mouseInfluence = 0.4
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mouse.y * mouseInfluence,
        0.06
      )
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * mouseInfluence,
        0.06
      )
      
      // 기본 회전 - 약간 다른 속도로
      ref.current.rotation.z = time * 0.015
      
      // 원거리 별들의 미묘한 움직임
      ref.current.position.x = Math.sin(time * 0.05) * 0.8
      ref.current.position.y = Math.cos(time * 0.03) * 0.5
    }
  })

  return (
    <Points ref={ref} positions={dots} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#34d399"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function BrightStars() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  
  const [stars] = useMemo(() => {
    const stars = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      stars[i * 3] = (Math.random() - 0.5) * 60
      stars[i * 3 + 1] = (Math.random() - 0.5) * 60
      stars[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return [stars]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      
      // 더 느린 마우스 반응 (원거리 별)
      const mouseInfluence = 0.2
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mouse.y * mouseInfluence,
        0.03
      )
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * mouseInfluence,
        0.03
      )
      
      // 매우 느린 회전
      ref.current.rotation.z = time * 0.005
    }
  })

  return (
    <Points ref={ref} positions={stars} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fbbf24"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ParticlesBackground() {
  return (
    <div 
      id="three-canvas-container"
      className="fixed inset-0 -z-10 pointer-events-none" 
      style={{ 
        background: '#000 !important',
        backgroundColor: '#000',
        backgroundImage: 'none'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}
        style={{ 
          background: '#000 !important',
          backgroundColor: '#000',
          width: '100%',
          height: '100%'
        }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 1.0)
          gl.domElement.style.background = '#000'
          gl.domElement.style.backgroundColor = '#000'
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['black']} />
        {/* 배경부터 앞쪽 순서로 배치 */}
        <BrightStars />
        <NebulaShader />
        <FloatingDots />
        <InteractiveParticles />
        
        {/* 은은한 조명 */}
        <ambientLight intensity={0.6} />
      </Canvas>
    </div>
  )
}