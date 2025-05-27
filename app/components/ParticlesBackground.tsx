'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function InteractiveParticles() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse, viewport } = useThree()
  
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(2500 * 3)
    for (let i = 0; i < 2500; i++) {
      // 더 넓은 범위에 파티클 배치
      sphere[i * 3] = (Math.random() - 0.5) * 25
      sphere[i * 3 + 1] = (Math.random() - 0.5) * 25
      sphere[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return [sphere]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      
      // 마우스 인터랙션 - 더 강한 효과
      const mouseInfluence = 0.5
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mouse.y * mouseInfluence,
        0.1
      )
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * mouseInfluence,
        0.1
      )
      
      // 기본 회전
      ref.current.rotation.z = time * 0.05
    }
  })

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.01}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

function FloatingDots() {
  const ref = useRef<THREE.Points>(null!)
  const { mouse } = useThree()
  
  const [dots] = useMemo(() => {
    const dots = new Float32Array(1500 * 3)
    for (let i = 0; i < 1500; i++) {
      dots[i * 3] = (Math.random() - 0.5) * 40
      dots[i * 3 + 1] = (Math.random() - 0.5) * 40
      dots[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return [dots]  }, [])

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime()
      
      // 첫 번째 파티클과 비슷한 마우스 인터랙션
      const mouseInfluence = 0.4
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mouse.y * mouseInfluence,
        0.09
      )
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mouse.x * mouseInfluence,
        0.09
      )
      
      // 기본 회전 - 거의 비슷한 속도로 통일감 연출
      ref.current.rotation.z = time * 0.04
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
        opacity={0.7}
      />
    </Points>
  )
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        dpr={[1, 2]}
      >
        <InteractiveParticles />
        <FloatingDots />
        
        {/* 더 밝은 조명 */}
        <ambientLight intensity={0.8} />
      </Canvas>
    </div>
  )
}