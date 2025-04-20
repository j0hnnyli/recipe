'use client'

import { useLayoutEffect, useRef } from 'react';
import { FaUtensils, FaClock, FaHeart, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import gsap from 'gsap';

const IntroContent = () => {
  const fadeInCaontainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fade-in-item', {
        x : 20,
        opacity : 0,
      },
      {
        x : 0,
        opacity : 1,
        stagger : 0.2,
        duration : 0.5,
      }
    )
      
      return () => ctx.revert();
    }, fadeInCaontainer)
  }, [])

  return (
    <div className="w-full">   
      <div
        ref={fadeInCaontainer}
        className='flex flex-col gap-10 md:w-[80%] mx-auto'
      >
        <div className="flex items-center text-white w-full justify-between border-b-2 fade-in-item opacity-0">
          <div className="text-4xl 2xl:text-6xl mb-2">
            <FaUtensils className="text-primary_yellow"></FaUtensils>
          </div>
          <p className="text-xl 2xl:text-3xl">Variety of Recipes</p>
        </div>

        <div className="flex items-center text-white w-full justify-between border-b-2 fade-in-item opacity-0">
          <div className="text-4xl 2xl:text-6xl mb-2">
            <FaClock className="text-primary_yellow"></FaClock>
          </div>
          <p className="text-xl 2xl:text-3xl">Quick & Easy Recipes</p>
        </div> 

        <div className="flex items-center text-white w-full justify-between border-b-2 fade-in-item opacity-0">
          <div className="text-4xl 2xl:text-6xl mb-2">
            <TiWorld className="text-primary_yellow"></TiWorld>
          </div>
          <p className="text-xl 2xl:text-3xl">Variety of Cultures</p>
        </div>

        <div className="flex items-center text-white w-full justify-between border-b-2 fade-in-item opacity-0">
          <div className="text-4xl 2xl:text-6xl mb-2">
            <FaHeart className="text-primary_yellow"></FaHeart>
          </div>
          <p className="text-xl 2xl:text-3xl">Personalized Recipe List</p>
        </div>            
      
        <div className="flex items-center text-primary_yellow justify-center fade-in-item opacity-0">
          <FaFacebook className="text-4xl mr-5 hover:text-white cursor-pointer" />
          <FaSquareXTwitter className="text-4xl mr-5 hover:text-white cursor-pointer" />
          <FaInstagramSquare className="text-4xl mr-5 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default IntroContent