"use client"

import { useAnimations, useGLTF, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three';
import { Color, TextureLoader } from 'three';

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
        // handle loaders
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        const gltf = useLoader(GLTFLoader, props.path, (loader) => {
            loader.setDRACOLoader(dracoLoader);
        });

        // handle animations
        const { actions, names } = useAnimations(gltf.animations, gltf.scene)
        console.log('animation names:', names)
        useEffect(() => {
            if (actions) {
                names?.forEach((name: string) => {
                    actions[name]?.reset().play()
                })
            }
        }, [actions])


        // handle textures
        const arashTexture2 = useTexture('/arash.jpg');
        const arashTexture = useLoader(
            TextureLoader,
            '/arash.jpg' //'/bg-red.png'
        )
        // Set custom repeat values on the texture
        useEffect(() => {
            if (arashTexture) {
                arashTexture.wrapS = THREE.RepeatWrapping;
                arashTexture.wrapT = THREE.RepeatWrapping;
                // Use only 50% of the texture, so it will be scaled down
                arashTexture.repeat.set(1, 1);
                // Offset by 25% so that it is centered in the full UV space
                arashTexture.offset.set(0.25, 0.25);
                arashTexture.needsUpdate = true;
                arashTexture.rotation = 1
                arashTexture.center = new THREE.Vector2(0.5, 0.5);
            }
        }, [arashTexture]);

        // Apply the texture to your material when the glTF is loaded
        useEffect(() => {
            if (gltf) {
                gltf.scene.traverse((child: any) => {
                    if (child instanceof THREE.Mesh) {
                        if (child.material.name === "lambert1") {
                            child.material = new THREE.MeshStandardMaterial({
                                map: arashTexture,
                                roughnessMap: arashTexture,
                                aoMap: arashTexture,
                            });
                        }
                    }
                });
            }
        }, [gltf, arashTexture]);

        // handle materials
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