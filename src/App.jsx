import React, { useEffect } from 'react'
import './index.css'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import LandingPage from './Pages/LandingPage'
import Page2 from './Pages/Page2'

function App() {

  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
      <div className='overflow-hidden'>
        <LandingPage/>
        <Page2/>
      </div>
  )
}

export default App
