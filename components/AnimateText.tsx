'use client'

import { ReactNode, useRef, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

type Props = {
  children: ReactNode,
  className?: string
}

const AnimateText = ({ children, className } : Props) => {
  const text = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cxt = gsap.context(() => {
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
    }, text)
    
    return () => cxt.revert();
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