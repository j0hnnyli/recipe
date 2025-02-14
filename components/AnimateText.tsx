'use client'

import { ReactNode, useRef, useLayoutEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode,
  className?: string
}

const AnimateText = ({ children, className } : Props) => {
  const text = useRef<HTMLParagraphElement>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true)
    gsap.registerPlugin(ScrollTrigger)

    if(isMounted){
      gsap.from(text.current ,{
        scrollTrigger: {
          trigger : text.current,
          start: '0px bottom',
          end: 'bottom+=200px bottom',
          scrub: true,
        },
        left: '-200px',
        opacity: 0,
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

export default AnimateText