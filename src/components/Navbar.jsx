import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleIntersection = (entries) => {
      let isInNavSection = false
      entries.forEach((entry) => {
        if (entry.isIntersecting && navLinks.some((nav) => nav.id === entry.target.id)) {
          setActive(entry.target.id)
          isInNavSection = true
        }
      })

      if (!isInNavSection) {
        setActive('') // Reset active when in a non-navLinks section
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75, // Increase to require more of the section to be visible
      rootMargin: "0px 0px -50% 0px", // Adjusts the "visible" area to start earlier
    })    

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-14 h-14 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Nguyễn Anh Tú &nbsp;
            <span className='sm:block hidden'>| React developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.id ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.id ? "text-white" : "text-secondary"} font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.id)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
