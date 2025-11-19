import { useScroll, useTransform, motion } from 'motion/react'
import React, { useRef } from 'react'

const Paragraph = () => {

  const text = "Hi! I'm Joshua Parada, a software developer based in Chile. I specialize in frontend web development primarily with React JS and Tailwind CSS, but still learning and exploring new technologies."

  const element = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.30']
  })

  const words = text.split(" ");

  return (
    <p ref={element}
      className='flex flex-wrap [line-height:1.2] text-text text-[clamp(1.3rem,5dvw,3rem)]'>
      {
        words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length)
          return (
            <Word key={`w_${i}`} index={i}
              progress={scrollYProgress}
              range={[start, end]}>
              {word}
            </Word>
          )
        })
      }
    </p>

  )
}


const Word = ({ children, progress, range }) => {

  const amount = range[1] - range[0]
  const step = amount / children.length

  return (
    <span className='mr-2 md:mr-5 relative'>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
          )
        })
      }
    </span>
  )
}

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className='absolute opacity-10'>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}

export default Paragraph


