import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

function LandingPage() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    document.querySelectorAll('.StripesL').forEach((elem) => {

      const tl = gsap.timeline();

      tl
      .set(elem, {
      }, "start")
      .to(elem, {
        xPercent: -105,
        scrollTrigger: {
          trigger: elem,
          start: "top 37%",
          end: "bottom top",
          scrub: true
        }
      }, "start")
    })

    document.querySelectorAll('.StripesR').forEach((elem) => {

      const tl = gsap.timeline();

      tl
      .set(elem, {
      }, "start")
      .to(elem, {
        xPercent: 105,
        scrollTrigger: {
          trigger: elem,
          start: "top 37%",
          end: "bottom top",
          scrub: true
        }
      }, "start")
    })
  })

  return (
    <div className="h-screen w-full relative">
        <div className="fixed z-[999] top-0 left-0 right-0 gap-x-2 p-2.5 bg-gray-800 flex justify-end">
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700">About</button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700">Contact Us</button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
        </div>
        <div className='flex justify-between py-80'>
          <div className="flex flex-col gap-y-6 justify-center h-full">
            <div className="StripesL w-[25vw] h-[3vw] bg-blue-600 "></div>
            <div className="StripesL w-[25vw] h-[3vw] bg-blue-600 "></div>
            <div className="StripesL w-[25vw] h-[3vw] bg-blue-600"></div>
          </div>
          <div className="flex flex-col gap-y-6 justify-center h-full">
            <div className="StripesR w-[25vw] h-[3vw] bg-blue-600"></div>
            <div className="StripesR w-[25vw] h-[3vw] bg-blue-600"></div>
            <div className="StripesR w-[25vw] h-[3vw] bg-blue-600"></div>
          </div>
        </div>
      </div>
  )
}

export default LandingPage
