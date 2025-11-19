import React from 'react'

const Section = ({children, className, id}) => {
  return (
    <section id={id} className={`py-[10dvh] px-8 max-w-7xl w-full flex flex-col items-center justify-center ${className}`}>
      {children}
    </section>
  )
}

export default Section