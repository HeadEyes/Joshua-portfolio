import React, { useEffect, useRef } from "react"
import { ReactLenis } from 'lenis/react'

import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
import Skills from "./Components/Skills"

function App() {

  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
    const rafId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <>
      <ReactLenis root options={{ lerp: 0.05 }} ref={lenisRef}>
        <Nav />
        <main className="mx-auto flex flex-col items-center">
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </ReactLenis>
    </>

  )
}

export default App
