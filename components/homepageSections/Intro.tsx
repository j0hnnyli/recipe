'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { FaUtensils, FaClock, FaHeart, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import PaddingContainer from '../PaddingContainer'


const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsLoaded(true) 

    gsap.registerPlugin(ScrollTrigger);

    const feats = gsap.utils.toArray(".feats") as HTMLElement[]

    const featsTimeline = gsap.timeline({
      scrollTrigger : {
        trigger: document.documentElement, 
        start: "top",             
        end: "+=10px",    
      }
    })

    const timeline = gsap.timeline({
      scrollTrigger : {
        trigger: document.documentElement,
        start: 'top',
        end: '+=75px',
        scrub: true,
      }
    })
    
    const titleTimeline = gsap.timeline({
      scrollTrigger : {
        trigger: document.documentElement,
        start: 'top',
        end: '+=50px',
      }
    })


    if(isLoaded){
      timeline.from(introRef.current, {clipPath: 'inset(8% 8% 0 8%)'})
      titleTimeline.from(titleRef.current, {scale: 0.5, opacity: .5})
      
      feats.forEach((feat: HTMLElement) => {
        const index = feat.dataset.index;

        featsTimeline.from(feat, {
          opacity: 0,
          x: -20,
          duration: 0.2,      
          delay: Number(index) * 0.2,
          ease: 'power1.in'
        })
      })
    }
 
  }, [isLoaded])

  return (
    <div 
      ref={introRef} 
      style={{
        visibility: isLoaded ? 'visible' : 'hidden',
      }}
      className="h-[92vh] w-full bg-red-400 mb-5 mt-20 relative flex flex-col justify-end items-center"
    >
      <Image 
        src='/introbg.jpg' 
        alt='showcase'
        width={300}
        height={500}
        priority
        className='w-full h-full object-cover brightness-[.65] absolute z-10'
      />

      <PaddingContainer className='relative z-20 text-white w-[80%] h-[90%]'>
        <h2 
          ref={titleRef}
          className='font-kaushanScript text-5xl md:text-7xl lg:text-9xl mt-10 tracking-widest text-center text-primary_yellow'
        >
          RECIPEHUB
        </h2>

        <div className='h-[75%] flex flex-col md:flex-row gap-5 w-full'> 
          <div className='flex flex-col justify-evenly h-full w-full md:w-[50%]'>

            <div
              data-index='0'
             className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl mb-2">
                <FaUtensils className="text-primary_yellow"></FaUtensils>
              </div>
              <p className="text-xl">Variety of Recipes</p>
            </div>

            <div 
              data-index='0.3'
              className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl mb-2">
                <FaClock className="text-primary_yellow"></FaClock>
              </div>
              <p className="text-xl">Quick & Easy Recipes</p>
            </div> 

            <div
              data-index='0.5'
             className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl mb-2">
                <TiWorld className="text-primary_yellow"></TiWorld>
              </div>
              <p className="text-xl">Variety of Cultures</p>
            </div>

            <div
              data-index='0.7'
             className="flex items-center text-white w-full md:w-[90%] lg:w-[60%] justify-between border-b-2 mx-auto feats"
            >
              <div className="text-4xl mb-2">
                <FaHeart className="text-primary_yellow"></FaHeart>
              </div>
              <p className="text-xl">Personalized Recipe List</p>
            </div>            
          </div>
          
          <div className='mt-auto ml-auto text-primary_yellow'>
            <div className='flex flex-row md:flex-col'>
              <FaFacebook className="text-4xl mr-5 md:mb-5 md:mr-0 hover:text-white cursor-pointer" />
              <FaSquareXTwitter className="text-4xl mr-5 md:mb-5 md:mr-0 hover:text-white cursor-pointer" />
              <FaInstagramSquare className="text-4xl mr-5 md:mb-5 md:mr-0 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </PaddingContainer>
    </div>
  )
}

export default Intro