import { motion } from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        // The viewport setting makes sure the animation happens once when the section is 25% visible.
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}> {/* đọc comment của hash-span trong index.css là hiểu, nhưng cái hash-span vẫn hơi lú thật */}
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }
}

export default SectionWrapper
