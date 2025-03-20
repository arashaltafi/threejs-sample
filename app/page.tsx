import Link from 'next/link'
import React from 'react'

// https://www.cgtrader.com/
// https://3dviewer.net/
// https://glb.ee/
// https://imagetostl.com/convert/file/png/to/glb#convert
// https://sketchfab.com/
// https://gltf.pmnd.rs/
// https://www.cgtrader.com/
// https://designcode.io/spline-react
// https://spline.design/
// https://app.spline.design/  (create online)

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-start gap-16'>
      <Link
        href="/spline"
        prefetch={false}
        className='px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-100 rounded-lg !text-white text-lg'
      >
        sample spline
      </Link>

      <span className='w-full h-px rounded-full bg-black' />

      <Link
        href="/react-three"
        prefetch={false}
        className='px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-100 rounded-lg !text-white text-lg'
      >
        sample react-three
      </Link>

      <span className='w-full h-px rounded-full bg-black' />

      <Link
        href="/threejs-1"
        prefetch={false}
        className='px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-100 rounded-lg !text-white text-lg'
      >
        sample threejs 1
      </Link>

      <span className='w-full h-px rounded-full bg-black' />

      <Link
        href="/threejs-2"
        prefetch={false}
        className='px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-100 rounded-lg !text-white text-lg'
      >
        sample threejs 2
      </Link>

      <span className='w-full h-px rounded-full bg-black' />

      <Link
        href="/threejs-3"
        prefetch={false}
        className='px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-100 rounded-lg !text-white text-lg'
      >
        sample threejs 3
      </Link>

      <span className='w-full h-px rounded-full bg-black' />

      <Link
        href="/threejs-4"
        prefetch={false}
        className='px-8 py-4 bg-red-500 hover:bg-red-600 transition-all duration-100 rounded-lg !text-white text-lg'
      >
        sample threejs 4
      </Link>

    </div>
  )
}

export default Home