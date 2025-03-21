"use client"

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei'
import Three0 from '@/components/Three0'

const ThreeJs0 = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-start w-full h-screen">
            <h1>ThreeJs 0</h1>
            <Canvas
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} />
                <directionalLight intensity={1} position={[0, 10, 5]} />
                <PerspectiveCamera makeDefault position={[50, 10, 20]} />
                <Environment colorSpace='srgb-linear' preset="studio" />
                <OrbitControls
                    enableDamping={true}
                    enableRotate={true}
                    enablePan={true}
                    autoRotate
                    rotateSpeed={3.0}
                    autoRotateSpeed={5.0}
                    enableZoom={true}
                    minDistance={1}
                    maxDistance={50}
                />
                <ContactShadows />
                <Loader />
                <Suspense fallback={null}>
                    <Three0 isWay1={true} path="/car-model.glb" />
                </Suspense>

                {/* <mesh>
                    <boxGeometry args={[1, 1, 2]} />
                    <torusGeometry args={[1, 0.4, 16, 100]} />
                    <shadowMaterial opacity={0.5} />
                    <meshStandardMaterial color={'red'} />
                </mesh> */}
            </Canvas>
        </div>
    )
}

export default ThreeJs0