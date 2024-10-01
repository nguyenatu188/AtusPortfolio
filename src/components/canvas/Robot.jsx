import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader' //Cái tên "CanvasLoader" đặt là tên gì cũng được, nó kiểu import Loader.jsx as *cái tên mik đặt*
import { AmbientLight } from 'three'

const Robot = () => {
  const robot = useGLTF('./robot/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={Math.PI * 10} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        decay={0}
        angle={0.12}
        penumbra={1}
        intensity={Math.PI * 10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight decay={0} intensity={Math.PI * 10} />
      <ambientLight decay={0} intensity={Math.PI * 10} />
      <primitive
        object={robot.scene}
        scale={0.035}
        position={[-0.5, -1.5, -0.5]}
      />
    </mesh>
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