import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader' //Cái tên "CanvasLoader" đặt là tên gì cũng được, nó kiểu import Loader.jsx as *cái tên mik đặt*

const Computers = ({ isMobile }) => {
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
        scale={isMobile ? 3 : 5.5}
        position={isMobile ? [-2, -3, 1] : [-4, -4.5, 1]}
        rotation={[-0.01, 0.4, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  // Dùng useState với useEffect và mediaQuery để handle responsive khi làm việc với threeJS,
  // còn nếu code thuần react, html và css thì cứ dùng mấy cái tailwind classes như "hidden" và "sm:..." để handle responsive
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Thêm listener lắng nghe sự thay đổi kích cỡ màn hình
    const mediaQuery = window.matchMedia('(max-width: 650px)')
    // Đặt bằng tham số sự thay đổi kích cỡ môn hình
    setIsMobile(mediaQuery.matches)
    // Định nghĩa hàm callback sẽ sử dụng khi thay đổi kích cỡ môn hình
    const handleMediaQueryChange = (event) => setIsMobile(event.matches)
    // Đặt listener là hàm callback vừa tạo
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    // Bỏ listener đi nếu component bị gỡ, ko sử dụng nữa (unmounted)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }    
  }, [])

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
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas