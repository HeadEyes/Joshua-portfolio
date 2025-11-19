import React, { useRef, useState } from 'react'
import { motion, scale, stagger } from 'motion/react'

const Magnet = ({ element, index }) => {

  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX, y: middleY })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position;

  return (
    <motion.div
    className='relative flex items-center justify-center'
      custom={index}
    >
      <motion.span
        className='cursor-pointer text-text hover:text-accent p-2 gap-4 flex flex-col items-center justify-center'
        style={{ position: "relative" }}
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x, y }}
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.1 }}
      >
        {element.icon}
      </motion.span>
    </motion.div>
  )
}

export default Magnet