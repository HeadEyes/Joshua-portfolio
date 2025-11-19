import React, { useEffect, useState } from 'react'
import ThemeButton from "./ThemeButton.jsx"
import navLinks from '../Data/NavLinks.jsx';
import { IoClose, IoMenu } from "react-icons/io5";
import MobileMenu from './MobileMenu.jsx';
import { motion, useScroll, useMotionValue, useMotionValueEvent } from 'motion/react';


const Nav = () => {

  const [open, setOpen] = useState(false) // Mobile menu state
  const [visible, setVisible] = useState(false) // Navbar visibility state

  const { scrollY } = useScroll(); // Get scroll position

  const toggleMenu = () => { // Toggle mobile menu
    setOpen(!open)
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setVisible(true); // Scrolling down
    } else {
      setVisible(false); // Scrolling up
    }
  })

  return (
    <motion.header

      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={visible ? "hidden" : "visible"}
      transition={{ duration: 0.2, ease: "easeInOut" }}

      className='w-full h-12 px-4 flex items-center justify-center text-text sticky top-0 bg-bg z-40 border-b-1 border-secondary'>
      <div className='max-w-6xl w-full flex justify-between items-center '>
        <nav className='flex'>
          <div className='flex sm:hidden'>
            <button onClick={toggleMenu}>{open ? <IoClose /> : <IoMenu />}</button>
          </div>
          {
            navLinks.map((item) => (
              <div className='hidden sm:flex'>
                <a href={`#${item.link}`} className='p-2 text-text-secondary hover:text-text font-medium             transition-colors duration-300 text-sm sm:text-base'>
                  {item.title}
                </a>
              </div>
            ))
          }
        </nav>

        <div className='flex justify-end'>
          <ThemeButton className={"p-2 text-text text-lg hover:bg-secondary rounded-lg duration-75"} />
        </div>
      </div>


      {
        open && <MobileMenu />
      }
    </motion.header>
  )
}

export default Nav