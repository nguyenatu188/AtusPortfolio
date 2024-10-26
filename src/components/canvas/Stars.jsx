import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()
  // array of positions
  const sphere = random.inSphere(new Float32Array(6000), { radius: 1.2 })
  
  // THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The “position” attribute is likely to have NaN values
  /* 6000 in new Float32Array(6000) means the array will have 6000 slots for numbers.
  The reason we use 6000 is that each 3D point inside the sphere needs 3 values: x, y, and z (the three dimensions of space).
  If we have 6000 slots, this corresponds to 2000 points because 6000 / 3 = 2000 points, each having three coordinates (x, y, z).
  
  Example:
  // A simple Float32Array example:
  const exampleArray = new Float32Array(6);
  // This array can store 6 floating-point numbers: [0, 0, 0, 0, 0, 0] */

  // updating the rotation.x and rotation.y values on each frame, this code makes the star field continuously rotate
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
    /* lí do dùng delta để xử lí tốc độ xoay (độ lệch thời gian giữa 2 frame) là:
    - Nếu máy tính có high-frame rate thì delta sẽ nhỏ <=> máy nhanh thì cho animation chậm thôi.
    - Nếu máy tính có low-frame rate thì delta sẽ lớn <=> mấy chậm thì cho animation nhanh lên.
    */
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}> 
        {/* frustumCulled: Ensures points outside the camera's view are not rendered, improving performance. 
            positions={sphere}: Uses the randomly generated positions of the stars.
            stride={3}: refers to the number of values (or "steps") the rendering engine needs to skip over to get to the next
            complete data set (in this case, the next point).
            {...props}: mik thêm props nào cho component <Stars /> thì những props đó sẽ được áp dụng vào đây, nơi mà đang định nghĩa
            các ngôi sao sẽ như nào. VD: trong <StarCanvas />, mik thêm <Stars color: "red" /> thì "color: "red"" sẽ được áp dụng vào đây.
        */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true} // Makes points appear smaller as they move farther away from the camera (perspective scaling).
          depthWrite={false} /* Vì làm việc với transparency (trong suốt) nên ko muốn các ngôi sao che được nhau khi có cái ở trước ở sau (depth),
          để depthWrite = true thì các element mà ở trên (z > hơn) sẽ che các element ở dưới (z < hơn). */
          />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    // (z-[-1] sets a negative z-index so it's behind other content).
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