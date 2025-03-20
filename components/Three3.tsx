"use client"

import React from 'react'
import { useGLTF } from '@react-three/drei'

interface Three3Props {
    position: [number, number, number];
}

export function Three3(props: Three3Props) {
    const { nodes, materials } = useGLTF('/ls_developer_k.glb')
    
    return (
        <group {...props.position} dispose={null}>
            <group scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.CHR_SC_LS_DeveloperK_CHR_SC_LS_DeveloperK_MAT_0.geometry}
                    material={materials.CHR_SC_LS_DeveloperK_MAT}
                    position={[0, 73.88658, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/ls_developer_k.glb')