'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shape
function FloatingShape({
  position,
  geometry,
  color,
  speed = 1,
  rotationAxis = [1, 1, 0],
}: {
  position: [number, number, number];
  geometry: 'icosahedron' | 'torus' | 'octahedron';
  color: string;
  speed?: number;
  rotationAxis?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x += 0.003 * speed * rotationAxis[0];
    meshRef.current.rotation.y += 0.005 * speed * rotationAxis[1];
    meshRef.current.rotation.z += 0.002 * speed * rotationAxis[2];
    meshRef.current.position.y = initialY + Math.sin(t * 0.5 * speed) * 0.4;
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      {geometry === 'torus' && <torusGeometry args={[0.8, 0.25, 16, 60]} />}
      {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.35}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

// Particle network
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00D4FF"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Connection lines between nearby particles
function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const count = 80;

  const { positions, colors } = useMemo(() => {
    const verts: number[] = [];
    const cols: number[] = [];
    const pts: [number, number, number][] = [];

    for (let i = 0; i < count; i++) {
      pts.push([
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 8,
      ]);
    }

    const maxDist = 4;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < maxDist) {
          verts.push(...pts[i], ...pts[j]);
          const alpha = 1 - dist / maxDist;
          // Cyan color with distance-based alpha
          cols.push(0, 0.83, 1, alpha, 0, 0.83, 1, alpha);
        }
      }
    }

    return {
      positions: new Float32Array(verts),
      colors: new Float32Array(cols),
    };
  }, []);

  useFrame((state) => {
    if (!lineRef.current) return;
    lineRef.current.rotation.y = state.clock.elapsedTime * 0.025;
    lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.015) * 0.05;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 4}
          itemSize={4}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

// Animated ring
function AnimatedRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={ringRef} position={[3, -1, -3]}>
      <torusGeometry args={[1.5, 0.02, 8, 80]} />
      <meshBasicMaterial color="#7F00FF" transparent opacity={0.5} />
    </mesh>
  );
}

function SceneContent() {
  const { camera } = useThree();
  camera.position.set(0, 0, 8);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00D4FF" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#7F00FF" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />

      <ParticleField />
      <ConnectionLines />
      <AnimatedRing />

      <FloatingShape
        position={[-3.5, 1.5, -2]}
        geometry="icosahedron"
        color="#00D4FF"
        speed={0.8}
        rotationAxis={[1, 1, 0]}
      />
      <FloatingShape
        position={[3.5, -1, -1]}
        geometry="torus"
        color="#7F00FF"
        speed={1.2}
        rotationAxis={[0, 1, 1]}
      />
      <FloatingShape
        position={[0, 2.5, -3]}
        geometry="octahedron"
        color="#00D4FF"
        speed={0.6}
        rotationAxis={[1, 0, 1]}
      />
      <FloatingShape
        position={[-2, -2, -2]}
        geometry="octahedron"
        color="#7F00FF"
        speed={1.0}
        rotationAxis={[1, 1, 1]}
      />
      <FloatingShape
        position={[4, 2, -4]}
        geometry="icosahedron"
        color="#7F00FF"
        speed={0.7}
        rotationAxis={[0, 1, 0]}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
