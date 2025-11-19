import React from 'react'
import navLinks from '../Data/NavLinks'
import { motion, AnimatePresence } from 'motion/react'

const MobileMenu = () => {

  const modalVariants = {
    visible: { y: 0, transition: { duration: 0.5 } },
    hidden: { y: "100%", transition: { duration: 0.5 } }
  }

  return (
    <AnimatePresence>
      <div className='w-full h-[calc(100dvh-100%)] absolute top-full left-0 flex flex-col items-center justify-center gap-2 bg-bg text-xl sm:hidden z-40'>
        {
          navLinks.map((item) => (
            <motion.a
              href={`#${item.link}`} className='text-base font-medium overflow-hidden p-4 flex items-center justify-center'>
              <motion.span
                className='overflow-hidden'>
                <motion.p
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  className='block'>
                  {item.title}
                </motion.p>
              </motion.span>
            </motion.a>
          ))
        }
      </div>
    </AnimatePresence>
  )
}


export default MobileMenu