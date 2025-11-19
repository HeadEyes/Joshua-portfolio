import React from 'react'
import Socials from "../Data/Socials"
import Section from './Section'
import Magnet from './Magnet'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100dvh-3rem)] px-[10dvw] flex flex-col items-center justify-center' id='home'>

      <div className='max-w-6xl w-full flex flex-col items-start font-bold text-nowrap text-[clamp(2rem,10dvw,6rem)]'>
        <h2 className='text-text text-[0.7em] font-semibold'>Hi, I'm</h2>
        <h1 className='text-accent'>Joshua Parada</h1>

        <div className='flex mt-4 sm:mt-8 gap-4  text-text '>
          {
            Socials.map((item, index) => (
              <a href={item.link} target='_blank' key={item.id} className='rounded-full text-2xl md:text-4xl hover:text-accent'>
                <Magnet key={item.id} element={item} index={index} />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Hero