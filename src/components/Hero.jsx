import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen'> {/* có thể sẽ cần dùng mx-auto */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]'/>
          <div className='w-1 sm:h-80 h-40 white-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hola, Tôi là <span className='text-[#4287f5]'>Nguyễn Anh Tú</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tôi phát triển ứng dụng web responsive <br 
            className='sm:block hidden'/>
            thiết kế tốt, dễ sử dụng và nhanh
          </p>
        </div>
      </div>

      <ComputersCanvas/>

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero