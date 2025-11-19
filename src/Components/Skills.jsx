import React, { useEffect, useRef } from 'react'
import Section from './Section'
import Magnet from './Magnet'
import skills from '../Data/skills'
import { useScroll, useTransform, motion } from 'motion/react'

const Skills = () => {

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const translateLeft = useTransform(scrollYProgress, [0, 1], [150 * 1, -150 * 1])
  const translateRight = useTransform(scrollYProgress, [0, 1], [150 * -1, -150 * -1])

  return (
    <section className='py-20 w-full overflow-hidden'>
      <div className='flex flex-col gap-8 text-[clamp(1.5rem,5dvw,3.5rem)]' ref={container}>
        {/* Slide */}
        <motion.ul className='flex  relative whitespace-nowrap'
          style={{
            x: translateLeft, left: '-30%'
          }}>
          {[...new Array(2)].fill(0).map((_, i) => (

            skills.map((item, index) => (
              // PHRASE
              <li key={index} className="text-text  font-semibold flex items-center">
                {item.title}
                <span className='mx-4'>-</span>
              </li>
            ))

          ))}

        </motion.ul>
        <motion.ul className='flex justify-center relative whitespace-nowrap'
          style={{
            x: translateRight, left: '-50%'
          }}>
          {[...new Array(2)].fill(0).map((_, i) => (

            skills.map((item, index) => (
              // PHRASE
              <li key={index} className="text-text font-semibold flex items-center">
                {item.title}
                <span className='mx-4'>-</span>
              </li>
            ))

          ))}

        </motion.ul>
      </div>

    </section>
  )
}

export default Skills