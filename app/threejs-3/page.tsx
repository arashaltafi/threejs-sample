"use client"

import React from 'react'
import {
    ContactShadows,
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Three6 } from '@/components/Three6';

// npm i three
// npm i @react-three/drei
// npm i @react-three/

const ThreeJs3 = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-start w-full min-h-screen">
            <h1>ThreeJs</h1>
            <Canvas className='bg-white rounded-xl'>
                {/* <Environment preset="studio" /> */}
                <PerspectiveCamera makeDefault position={[2, 3.9, 4.1]} />
                <OrbitControls />
                <ContactShadows />
                <Three6 position={[0, 0.1, 0]} />
            </Canvas>
        </div>
    )
}

export default ThreeJs3