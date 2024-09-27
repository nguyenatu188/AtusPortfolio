import { Html, useProgress } from '@react-three/drei'
const Loader = () => {
  const { progress } = useProgress()
  return (
    <Html> {/*bình thường thì viết html code vào react thoải mái nhưng mà khi dùng threejs thì nó sẽ render bằng canvas và muốn có html
    trong đó thì phải sử dụng component <Html>...</Html>*/}
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 30,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 80
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader