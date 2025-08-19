// "use client"

// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
// import { useRef } from "react"
// import { useFrame } from "@react-three/fiber"
// import type * as THREE from "three"

// function AnimatedSphere({
//   position,
//   color,
//   speed,
// }: { position: [number, number, number]; color: string; speed: number }) {
//   const meshRef = useRef<THREE.Mesh>(null)

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * speed
//       meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5
//       meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
//     }
//   })

//   return (
//     <Sphere ref={meshRef} args={[1, 100, 200]} position={position} scale={0.8}>
//       <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
//     </Sphere>
//   )
// }

// export default function ThreeBackground() {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <Canvas
//         camera={{ position: [0, 0, 10], fov: 75 }}
//         style={{ background: "linear-gradient(135deg, #002B5B 0%, #001a3d 50%, #000d1f 100%)" }}
//       >
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00AEEF" />

//         <AnimatedSphere position={[-4, 2, -5]} color="#00AEEF" speed={0.5} />
//         <AnimatedSphere position={[4, -2, -3]} color="#0066cc" speed={0.3} />
//         <AnimatedSphere position={[0, 0, -8]} color="#004499" speed={0.2} />
//         <AnimatedSphere position={[-2, -4, -6]} color="#00AEEF" speed={0.4} />
//         <AnimatedSphere position={[3, 3, -4]} color="#0088dd" speed={0.6} />

//         <Environment preset="night" />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>
//     </div>
//   )
// }

"use client"

import React from "react"

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="https://www.dropbox.com/scl/fi/r7ohwlnvrjrusarxctcd7/GettyImages-636463142.mov?rlkey=cwcrw8ybgdhosx5fn8sojvf1s&st=4fvcnga7&dl=0" // replace with your 4K video path
      />
      {/* Optional overlay for darkening or effects */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}

// https://www.dropbox.com/scl/fi/r7ohwlnvrjrusarxctcd7/GettyImages-636463142.mov?rlkey=cwcrw8ybgdhosx5fn8sojvf1s&st=4fvcnga7&dl=0
