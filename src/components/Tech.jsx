import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../style'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")