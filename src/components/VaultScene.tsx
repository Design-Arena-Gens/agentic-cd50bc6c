'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import type { Mesh } from 'three';
import { Color } from 'three';

const VaultCore = () => {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * 0.35;
  });

  const segments = useMemo(() => Array.from({ length: 24 }), []);

  return (
    <group ref={ref}>
      {segments.map((_, index) => {
        const angle = (index / segments.length) * Math.PI * 2;
        const radius = 1.45;
        return (
          <mesh key={index} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
            <boxGeometry args={[0.08, 0.5, 0.22]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? '#a9bfff' : '#7690ff'}
              metalness={0.9}
              roughness={0.2}
              emissive={new Color('#1e2a7b').multiplyScalar(0.4)}
              envMapIntensity={1.2}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const VaultRings = () => {
  const outerRing = useRef<Mesh>(null);
  const innerRing = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRing.current) outerRing.current.rotation.z = t * 0.1;
    if (innerRing.current) innerRing.current.rotation.z = -t * 0.18;
  });

  return (
    <group>
      <mesh ref={outerRing}>
        <torusGeometry args={[2.2, 0.12, 28, 220]} />
        <meshStandardMaterial
          color="#1c2542"
          metalness={1}
          roughness={0.15}
          envMapIntensity={1}
        />
      </mesh>
      <mesh ref={innerRing}>
        <torusGeometry args={[1, 0.075, 24, 160]} />
        <meshStandardMaterial
          color="#32406f"
          metalness={0.8}
          roughness={0.18}
          emissive={'#1d2a5b'}
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  );
};

const VaultShield = () => {
  const shield = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (shield.current) {
      shield.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.45) * 0.22;
    }
  });

  return (
    <mesh ref={shield} position={[0, 0, 0.35]}>
      <cylinderGeometry args={[1.8, 2, 0.15, 96, 1, true]} />
      <meshStandardMaterial
        color="#0d1528"
        metalness={0.7}
        roughness={0.05}
        transparent
        opacity={0.94}
        side={2}
      />
    </mesh>
  );
};

const VaultEnergy = () => {
  const energy = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (energy.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 1.4) * 0.06;
      energy.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={energy}>
      <sphereGeometry args={[0.6, 64, 64]} />
      <meshStandardMaterial
        color="#9fbaff"
        transparent
        opacity={0.4}
        emissive={'#8fc6ff'}
        emissiveIntensity={1.4}
      />
    </mesh>
  );
};

const VaultSceneContent = () => (
  <group position={[0, 0, 0]}>
    <VaultShield />
    <VaultRings />
    <VaultCore />
    <VaultEnergy />
    <mesh position={[0, 0, -0.08]}>
      <circleGeometry args={[2.3, 120]} />
      <meshStandardMaterial
        color="#0b1222"
        metalness={0.8}
        roughness={0.1}
        envMapIntensity={1.4}
      />
    </mesh>
  </group>
);

type VaultSceneProps = {
  className?: string;
};

const VaultScene = ({ className }: VaultSceneProps) => {
  return (
    <div className={className}>
      <Canvas dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <color attach="background" args={['#02030a']} />
        <ambientLight intensity={0.3} />
        <spotLight position={[5, 6, 6]} angle={0.45} penumbra={0.5} intensity={1.2} />
        <spotLight position={[-5, -6, 6]} angle={0.35} penumbra={0.4} intensity={0.8} color="#6b82ff" />
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={38} />
        <VaultSceneContent />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={(Math.PI / 2) * 1.1}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default VaultScene;
