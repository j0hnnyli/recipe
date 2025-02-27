'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FaUtensils, FaClock, FaHeart, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import PaddingContainer from '../PaddingContainer'
import { twMerge } from 'tailwind-merge'
import About from './About'


const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsLoaded(true) 

    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger : {
        trigger: document.documentElement,
        start: 'top',
        end: '+=75px',
        scrub: true,
      }
    })

    if(isLoaded){
      timeline.from(introRef.current, {clipPath: 'inset(12% 12% 0 12%)'})
    }
 
  }, [isLoaded])

  return (
    <div 
      ref={introRef} 
      className={
        twMerge("h-[150vh] max-h-[1900px] w-full mb-5 relative flex flex-col justify-end items-center mt-28", isLoaded ? 'visible' : 'hidden')
      }
    >
      <Image 
        src='/introbg.jpg' 
        alt='showcase'
        width={300}
        height={500}
        priority
        className='w-full h-full object-cover brightness-[.50] absolute z-10'
      />

      <PaddingContainer className='relative z-20 text-white w-[80%] h-[90%]'>
        <h2 
          className='font-kaushanScript text-5xl md:text-7xl lg:text-9xl mt-10 tracking-widest text-center text-primary_yellow'
        >
          RECIPEHUB
        </h2>

        <div className='h-[50%] flex flex-col md:flex-row gap-5 w-full'> 
          <div
            className='flex flex-col justify-evenly h-full w-full md:w-[60%]'
          >
            <div
              className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl 2xl:text-6xl mb-2">
                <FaUtensils className="text-primary_yellow"></FaUtensils>
              </div>
              <p className="text-xl 2xl:text-3xl">Variety of Recipes</p>
            </div>

            <div 
              className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl 2xl:text-6xl mb-2">
                <FaClock className="text-primary_yellow"></FaClock>
              </div>
              <p className="text-xl 2xl:text-3xl">Quick & Easy Recipes</p>
            </div> 

            <div
             className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl 2xl:text-6xl mb-2">
                <TiWorld className="text-primary_yellow"></TiWorld>
              </div>
              <p className="text-xl 2xl:text-3xl">Variety of Cultures</p>
            </div>

            <div
             className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl 2xl:text-6xl mb-2">
                <FaHeart className="text-primary_yellow"></FaHeart>
              </div>
              <p className="text-xl 2xl:text-3xl">Personalized Recipe List</p>
            </div>            
         
            <div className='flex items-center text-primary_yellow justify-center'>
              <FaFacebook className="text-4xl mr-5 hover:text-white cursor-pointer" />
              <FaSquareXTwitter className="text-4xl mr-5 hover:text-white cursor-pointer" />
              <FaInstagramSquare className="text-4xl mr-5 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <About/>
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Intro
