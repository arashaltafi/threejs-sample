"use client"

import React from "react";
import { useGLTF } from "@react-three/drei";

interface Three2Props {
    position: [number, number, number];
}

export function Three4(props: Three2Props) {
    const { nodes, materials } = useGLTF("/shirt.glb")

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh
                    name="T_Shirt_male"
                    castShadow
                    receiveShadow
                    geometry={nodes.T_Shirt_male.geometry}
                    material={materials.lambert1}
                    userData={{ name: 'T_Shirt_male' }}
                />
            </group>
        </group>
    )
}

useGLTF.preload("/shirt.glb")