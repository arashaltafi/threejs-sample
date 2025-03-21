"use client"

import React from 'react'
import Spline from '@splinetool/react-spline'

// npm install @splinetool/react-spline

const SplineSample = () => {
    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1>Spline</h1>
            <div className='w-2/3 flex flex-col gap-16'>
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
                <Spline scene="https://prod.spline.design/SDqBVKajWdVwV-uz/scene.splinecode" />
                <Spline scene="https://prod.spline.design/4hEQkrrTZ6PyKf1C/scene.splinecode" />
                <Spline scene="https://prod.spline.design/gzhT5aKCi79fkfdC/scene.splinecode" />
            </div>
        </div>
    )
}

export default SplineSample