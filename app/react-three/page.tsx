"use client"

// npm i three @react-three/fiber @react-three/drei

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ReactFiberComponent from '@/components/ReactFiberComponent';

const ReactFiber = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <ReactFiberComponent path="/headphone_3.glb" />
                </Suspense>
                <OrbitControls
                    enableZoom={true}
                    minDistance={1}
                    maxDistance={4}
                />
                <ContactShadows />
            </Canvas>
        </div>
    )
}

export default ReactFiber