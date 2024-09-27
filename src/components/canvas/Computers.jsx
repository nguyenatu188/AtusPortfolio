import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader' //Cái tên "CanvasLoader" đặt là tên gì cũng được, nó kiểu import Loader.jsx as *cái tên mik đặt*

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight
        intensity={Math.PI}
        groundColor="black" />
      <pointLight
        decay={0}
        position={[20, 10, 0]}
        intensity={Math.PI * 5} />
      <spotLight
        decay={0}
        position={[-100, 80, 10]}
        angle={0.12}
        penumbra={1}
        intensity={Math.PI}
        castShadow //đổ bóng
        shadow-mapSize={1024} //chỉnh pixel
      />
      <primitive
        object={computer.scene}
        scale={5.5}
        position={[-4, -4.5, 1]}
        rotation={[-0.01, 0.4, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand' /* chỉ update scene khi cần (khi người dùng dịch cam hoặc có j đó thay đổi), 
      sẽ k sử dụng khi muốn scene thay đổi liên tục như animation */
      shadows
      dpr={[1, 2]} // 1 là default, nếu màn hình mà có độ phân giải cao thì set dpr = 2 để scene nhìn vẫn rõ
      camera={{ position: [20, 3, 5], fov: 25 }} //set up camera x,y,z và độ rộng của tầm nhìn
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas