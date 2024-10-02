import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(6000), { radius: 1.2 }) 
  // THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The “position” attribute is likely to have NaN values
  /* Each point should have (x, y, z) coordinates which are 3 values in total.
  And I assume that "positions={}" inside your "Points" element expect to receive an array for point positions.
  And that should be dividable by 3.
  3 values for each point.
  And 5000 is not dividable by 3.
  5001 worked for me. */

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false} 
          />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute z-[-1] inset-0'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas