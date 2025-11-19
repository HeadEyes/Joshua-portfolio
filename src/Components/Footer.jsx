import React from 'react'
import Socials from "../Data/Socials"

const Footer = () => {
  return (
    <section className='mt-30 relative h-[80dvh] w-full bg-primary '
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='relative h-[calc(100vh+80dvh)] -top-[100vh]'>
        <div className='h-[80dvh] md:py-8 py-4 px-6 md:px-12 sticky gap-8 top-[calc(100vh-80dvh)] flex flex-col items-center'>

          <div className=' h-full max-w-2xl pt-4 flex flex-col justify-center gap-4 text-base items-center text-[clamp(2rem,4dvw,2.5rem)]'>
            <h3 className='text-accent mb-4 font-semibold tracking-wide'>
              Get in touch
            </h3>
            <p className='text-text text-center text-[clamp(0.5em,4dvw,0.5em)]'>I'm actively currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className='flex gap-8 text-[0.8em] mt-8 md:mt-12'>
              {
                Socials.map((social, index) => (
                  <a key={index} href={social.link} target="_blank" className='flex w-fit items-center hover:text-accent duration-300 text-text-secondary '>
                    {social.icon}
                  </a>
                ))
              }
            </div>

          </div>

          <div className='mt-auto w-full flex flex-col gap-4 md:gap-8'>
            <span className='bg-secondary h-0.5 w-full'></span>
            <h2 className='text-accent text-center md:text-start text-[clamp(1.8rem,5vw,3.7rem)] font-semibold'>JOSHUA PARADA</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer