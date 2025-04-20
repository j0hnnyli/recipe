'use client'

import { ReactNode, useRef, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

type Props = {
  children: ReactNode,
  className?: string
}

const AnimateIngredients = ({ children, className } : Props) => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        {
          left: 0,
          opacity: 1,
        },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top top+=100px',
            end: 'bottom',
            scrub: true,
          },
          left: '-200px',
          opacity: 0,
          duration: 0.4,
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={textRef} 
      className={className}
    >
      {children}
    </div>
  )
}

export default AnimateIngredients