"use client"

import { useAnimations, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

interface PropsType {
    path: string,
    isWay1: boolean
}

const Three0 = (props: PropsType) => {
    if (props.isWay1) {
        const { scene, animations } = useGLTF(props.path, true)
        const { actions, names } = useAnimations(animations, scene)

        console.log('animation names:', names)

        useEffect(() => {
            if (actions && actions['Take 001']) {
                actions['Take 001'].play()
            }
        }, [actions])

        return <primitive object={scene} />
    } else {
        const gltf = useLoader(GLTFLoader, props.path);

        console.log('gltf:', gltf)

        return <primitive object={gltf.scene} />;
    }
}

export default Three0