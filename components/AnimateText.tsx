'use client'

import { ReactNode, useRef, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

type Props = {
  children: ReactNode,
  className?: string
}

const AnimateText = ({ children, className } : Props) => {
  const text = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if(text.current){
      gsap.from(text.current ,{
        scrollTrigger: {
          trigger : text.current,
          start: '0px bottom',
          end: 'bottom+=200px bottom',
          scrub: 0.5,
          toggleActions: 'play none none none', 
        },
        left: '-200px',
        opacity: 0,
      })
    }
  }, [])

  return (
    <div
      ref={text} 
      className={className}
    >
      {children}
    </div>
  )
}

export default AnimateText