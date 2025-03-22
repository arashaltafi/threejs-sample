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
                shadows
                camera={{ position: [0, 0, 0], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} />
                <directionalLight intensity={1} position={[10, 10, 5]} />
                <PerspectiveCamera makeDefault position={[1, 1, 1]} />
                <Environment preset="studio" />
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
                    <Three0 isWay1={false} path="/shirt.glb" />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default ThreeJs0