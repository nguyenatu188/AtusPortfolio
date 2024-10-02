import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader' //Cái tên "CanvasLoader" đặt là tên gì cũng được, nó kiểu import Loader.jsx as *cái tên mik đặt*
import { AmbientLight } from 'three'

const Robot = () => {
  const robot = useGLTF('./robot/scene.gltf')
  return (
      <primitive
        object={robot.scene}
        scale={4.75}
        position={[1, -2, 0]}
        rotation-y={0}
      />
  )
}

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop='demand' /* chỉ update scene khi cần (khi người dùng dịch cam hoặc có j đó thay đổi), 
      sẽ k sử dụng khi muốn scene thay đổi liên tục như animation */
      shadows
      dpr={[1, 2]} // 1 là default, nếu màn hình mà có độ phân giải cao thì set dpr = 2 để scene nhìn vẫn rõ
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [20, 3, 5], fov: 45, near: 0.1, far: 200 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default RobotCanvas