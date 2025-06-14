"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

interface CodeSnippetProps {
  position: [number, number, number];
  code: string;
}

function CodeSnippet({ position, code }: CodeSnippetProps) {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      {" "}
      <Text
        ref={mesh}
        position={position}
        fontSize={0.3}
        color="#4A90E2"
        anchorX="center"
        anchorY="middle"
      >
        {code}
      </Text>
    </Float>
  );
}

function FloatingCodeUniverse() {
  const codeSnippets = useMemo(
    () => [
      "const life = code();",
      "while(true) { learn(); }",
      "git commit -m 'fix: everything'",
      "// TODO: 내일 하자",
      "console.log('왜 안돼...');",
      "npm install happiness",
      "} catch(월급) { 야근(); }",
      "if (coffee === null) panic();",
      "return 성공 || 좌절;",
      "// 이게 왜 돼지?",
      "await 주말.sleep(2);",
      "function 퇴근() { return false; }",
    ],

    [],
  );

  const positions = useMemo(
    () =>
      codeSnippets.map(
        () =>
          [
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 15,
          ] as [number, number, number],
      ),
    [codeSnippets],
  );

  return (
    <>
      {codeSnippets.map((code, i) => (
        <CodeSnippet key={i} position={positions[i]} code={code} />
      ))}
    </>
  );
}

function Scene() {
  return (
    <>
      {/* 주변 조명 */}
      <ambientLight intensity={0.4} />
      {/* 포인트 라이트 */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#EDF252" />

      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#BBBF49" />

      {/* 떠다니는 코드 */}
      <FloatingCodeUniverse />

      {/* 배경 파티클 효과 */}
      <mesh position={[0, 0, -10]}>
        <sphereGeometry args={[20, 32, 32]} />{" "}
        <MeshDistortMaterial
          color="#020126"
          distort={0.1}
          speed={0.5}
          roughness={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div id="three-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
