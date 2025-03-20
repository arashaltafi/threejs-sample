"use client"

import React from 'react'
import {
    ContactShadows,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Three2 } from '@/components/Three2';
import { Three3 } from '@/components/Three3';

// npm i three
// npm i @react-three/drei
// npm i @react-three/fiber

const ThreeJs1 = () => {
    return (
        <div className="h-screen">
            <h1>ThreeJs</h1>
            <Canvas
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <color attach="background" args={["#eee"]} />
                {/* <Environment preset="studio" /> */}
                <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
                <OrbitControls />
                {/* <Three2 position={[0, 0.1, 0]} /> */}
                <Three3 position={[10, 0.1, 0]} />
                <ContactShadows />
            </Canvas>
        </div>
    )
}

export default ThreeJs1