"use client"

import { useAnimations, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { Color } from 'three'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
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
            if (actions) {
                names?.forEach((name: string) => {
                    actions[name]?.reset().play()
                })
            }
        }, [actions])

        return <primitive object={scene} />
    } else {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        const gltf = useLoader(GLTFLoader, props.path, (loader) => {
            loader.setDRACOLoader(dracoLoader);
        });

        const { actions, names } = useAnimations(gltf.animations, gltf.scene)

        console.log('animation names:', names)

        useEffect(() => {
            if (actions) {
                names?.forEach((name: string) => {
                    actions[name]?.reset().play()
                })
            }
        }, [actions])

        useEffect(() => {
            if (gltf) {
                gltf.scene.traverse((child: any) => {
                    if (child.isMesh) {
                        child.material.metalness = 1.5
                        child.material.roughness = 0.1
                        child.castShadow = true
                        child.receiveShadow = true
                        child.material.needsUpdate = true
                        if (child.material.name == "glass") {
                            child.material.color = new Color(0x000000)
                            child.material.opacity = 0.5
                        }
                        if (child.material.name == "matte") {
                            child.material.color = new Color(0xff0000)
                            child.material.opacity = 1
                        }
                        if (child.material.name == "bodyMAT") {
                            child.material.color = new Color(0xffffff)
                            child.material.opacity = 1
                        }
                        console.log('material name:', child.material.name)
                    }
                })
            }
        }, [gltf])

        return <primitive object={gltf.scene} />;
    }
}

export default Three0