"use client"

import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { Group } from 'three'

// Component that loads the car model and animates the door
function CarModel({ doorOpen }: { doorOpen: boolean }) {
    // Load the model from public folder
    const { scene, animations } = useGLTF('/car-model.glb', true)
    const doorRef = useRef<Group | null>(null)
    const { actions, names } = useAnimations(animations, scene)

    console.log('aaa', scene)

    useEffect(() => {
        // If you know the name of the animation, play it:
        // For example, if the animation is named "Run":
        if (actions && actions['Take 001']) {
          actions['Take 001'].play()
        }
        // Alternatively, you can loop through all animations and play them
        // Object.values(actions).forEach(action => action.play())
      }, [actions])

    // Find the door object in the model (adjust the name if needed)
    useEffect(() => {
        const door = scene.getObjectByName("Sketchfab_model")
        if (door) {
            doorRef.current = door as Group
        } else {
            console.warn('Door object not found in the model. Check the object name.')
        }
    }, [scene])

    // Animate the door rotation using GSAP when doorOpen state changes
    useEffect(() => {
        if (doorRef.current) {
            gsap.to(doorRef.current.rotation, {
                y: doorOpen ? Math.PI / 3 : 0, // Rotate door to 60° open or close it (0°)
                duration: 1,
            })
        }
    }, [doorOpen])

    return <primitive object={scene} />
}

export default function ThreeJs5() {
    const [doorOpen, setDoorOpen] = useState(false)

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Canvas camera={{ position: [0, 2, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight intensity={1} position={[0, 10, 5]} />
                <OrbitControls autoRotate autoRotateSpeed={1.0} />
                <Suspense fallback={null}>
                    <CarModel doorOpen={doorOpen} />
                </Suspense>
            </Canvas>
            <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <button onClick={() => setDoorOpen(true)} style={{ marginRight: '10px' }}>
                    Open Door
                </button>
                <button onClick={() => setDoorOpen(false)}>Close Door</button>
            </div>
        </div>
    )
}