"use client"

import React from 'react'
import {
    ContactShadows,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// npm i three
// npm i @react-three/drei
// npm i @react-three/fiber

const ThreeJs2 = () => {
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
                <ContactShadows />

                <mesh>
                    <boxGeometry args={[1, 1, 2]} />
                    {/* <torusGeometry args={[1, 0.4, 16, 100]} /> */}
                    <shadowMaterial opacity={0.5} />
                    <meshStandardMaterial color={'red'} />
                </mesh>
            </Canvas>
        </div>
    )
}

export default ThreeJs2