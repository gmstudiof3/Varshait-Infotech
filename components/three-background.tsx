"use client"

import { Canvas } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import * as THREE_IMPL from "three"

function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(() => {
    const geo = new THREE_IMPL.PlaneGeometry(20, 10, 50, 25)
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry) {
      const positions = meshRef.current.geometry.attributes.position
      const time = state.clock.elapsedTime

      if (!positions || typeof positions.count === "undefined") {
        return
      }

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)

        const waveX = Math.sin(x * 0.3 + time * 0.5) * 0.5
        const waveY = Math.sin(y * 0.2 + time * 0.3) * 0.3
        const waveZ = Math.sin(x * 0.1 + y * 0.1 + time * 0.4) * 1.5

        positions.setZ(i, waveX + waveY + waveZ)
      }

      positions.needsUpdate = true
      meshRef.current.geometry.computeVertexNormals()
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -3, -5]} rotation={[-Math.PI / 3, 0, 0]}>
      <meshStandardMaterial
        color="#8B5CF6"
        transparent
        opacity={0.8}
        wireframe={false}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  )
}

function ColorfulWave({
  position,
  color,
  rotation,
  scale = 1,
}: {
  position: [number, number, number]
  color: string
  rotation: [number, number, number]
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(() => {
    return new THREE_IMPL.PlaneGeometry(25 * scale, 12 * scale, 60, 30)
  }, [scale])

  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry) {
      const positions = meshRef.current.geometry.attributes.position
      const time = state.clock.elapsedTime

      if (!positions || typeof positions.count === "undefined") {
        return
      }

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i)
        const y = positions.getY(i)

        const wave1 = Math.sin(x * 0.15 + time * 0.8) * Math.cos(y * 0.2 + time * 0.6) * 1.8
        const wave2 = Math.sin(x * 0.1 + y * 0.15 + time * 0.4) * 0.8
        const wave3 = Math.cos(x * 0.05 + time * 1.2) * Math.sin(y * 0.1 + time * 0.9) * 1.2

        positions.setZ(i, wave1 + wave2 + wave3)
      }

      positions.needsUpdate = true
      meshRef.current.geometry.computeVertexNormals()
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} rotation={rotation}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 3, 10], fov: 75 }}
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a0033 20%, #2d1b69 40%, #0f0f23 60%, #000000 100%)",
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[15, 15, 15]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-15, 10, 8]} intensity={1} color="#8B5CF6" />
        <pointLight position={[8, -8, 5]} intensity={0.8} color="#EC4899" />
        <pointLight position={[-8, 5, -5]} intensity={0.6} color="#3B82F6" />

        <WaveGeometry />
        <ColorfulWave position={[0, -6, -8]} color="#8B5CF6" rotation={[-Math.PI / 6, 0, 0]} scale={1.2} />
        <ColorfulWave position={[0, -7, -5]} color="#EC4899" rotation={[-Math.PI / 8, 0, Math.PI / 12]} scale={1.1} />
        <ColorfulWave position={[0, -8, -2]} color="#F59E0B" rotation={[-Math.PI / 10, 0, -Math.PI / 16]} scale={1.3} />
        <ColorfulWave position={[0, -9, 1]} color="#3B82F6" rotation={[-Math.PI / 12, 0, Math.PI / 20]} scale={1.0} />
        <ColorfulWave position={[0, -10, 4]} color="#10B981" rotation={[-Math.PI / 14, 0, -Math.PI / 24]} scale={0.9} />
      </Canvas>
    </div>
  )
}
