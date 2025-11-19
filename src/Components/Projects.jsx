import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import project from "../Data/Project"
import Section from './Section'
import { useScroll } from 'motion/react'

const Projects = () => {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <Section className='' id="projects">
      <ul ref={container} className='relative flex flex-col gap-20'>
        {project.map((item, i) => {
          const targetScale = 1 - ((project.length - i) * 0.05);
          return (<ProjectCard key={`p_${i}`} item={item} i={i} progress={scrollYProgress} range={[i * (1/project.length), 1]} targetScale={targetScale} />)
        })}
      </ul>
    </Section>
  )
}

export default Projects