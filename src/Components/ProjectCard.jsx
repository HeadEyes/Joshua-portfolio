import React, { useEffect, useRef } from 'react'
import { useTransform, useScroll, motion } from 'motion/react'

const ProjectCard = ({ item, i, progress, range, targetScale }) => {

  const scale = useTransform(progress, range, [1, targetScale]);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  return (
    <div className='flex items-center justify-center sticky top-20' ref={container}>
      <motion.div
        className='flex flex-col relative h-[75dvh] md:h-[500px] max-w-xl w-full md:max-w-6xl rounded-3xl p-4 md:p-8 origin-top bg-primary border-secondary border-2'
        style={{ top: `calc( ${i * 25}px)`,scale }}
      >

        <div className='flex md:flex-row flex-col h-full justify-between gap-4 md:gap-16'>

          <div className='h-full flex flex-col gap-2 md:gap-4 items-start order-2 md:order-1 min-h-0'>

            {/* TITLE */}
            <div className='w-full flex flex-col items-start gap-2'>
              <h2 className='text-center text-base md:text-2xl text-accent font-semibold tracking-widest'>{item.title}</h2>
              <span className='w-full h-[1px] bg-secondary'></span>
            </div>

            {/* DESCRIPTION */}
            <p className='text-text-secondary text-sm sm:text-base md:text-lg overflow-y-auto pr-2'>
              {item.description}
            </p>

            {/* TECHNOLOGIES */}
            <ul className='flex gap-2 my-2 flex-wrap'>
              {item.tech.map((tech, index) => (
                <li key={`t_${index}`} className='text-xs md:text-sm py-1 px-2 rounded-sm bg-secondary/60 text-text '>{tech}</li>
              ))}
            </ul>

            {/* LINKS */}
            <div className='w-full mt-auto justify-center md:justify-start flex gap-4'>
              <a className='text-sm md:text-base font-medium p-2 bg-inverse text-bg flex items-center rounded-md text-nowrap' href={item.repo} target="_blank" rel="noreferrer">Github repo</a>

              <a className='text-sm md:text-base font-medium p-2 bg-primary text-text border-2 border-inverse rounded-md flex items-center text-nowrap' href={item.demo} target="_blank" rel="noreferrer">Live demo</a>
            </div>

          </div>

          {/* IMAGE */}
          <div className='md:max-w-1/2 h-1/3 md:h-auto shrink-0 rounded-3xl overflow-hidden order-1 md:order-2'>
            <motion.div className='flex h-full' style={{ scale: imageScale }}>
              <img
                src={`${item.img}`}
                alt="image"
                className='object-cover flex h-full w-full'
              />
            </motion.div>
          </div>

        </div>

      </motion.div>
    </div>
  )
}

export default ProjectCard