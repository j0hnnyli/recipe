'use client'

import { ReactNode, useRef, useLayoutEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode,
  className?: string
}

const AnimateIngredients = ({ children, className } : Props) => {
  const text = useRef<HTMLParagraphElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    setIsMounted(true)

    if(isMounted){
      gsap.fromTo(text.current ,{
        left: 0,
        opacity: 1,
      }, {
        scrollTrigger: {
          trigger : text.current,
          start: 'top top+=100px',
          end: 'bottom',
          scrub: true,
        },
        left: '-200px',
        opacity: 0,
        duration: 0.4,
        ease: "power1.in"
      })
    }
  }, [isMounted])

  return (
    <div
      ref={text} 
      className={twMerge(isMounted ? 'visible' : 'hidden' ,className)}
    >
      {children}
    </div>
  )
}

export default AnimateIngredients