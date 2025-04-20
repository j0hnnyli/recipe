'use client'

import { ReactNode, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';

type Props = {
  children : ReactNode;
  delay ? : number;
  direction : 'x' | 'y'
  fadeInDirection : 'right' | 'left'
  className : string;
}

const FadeInComponent = ({ children, delay = 0, direction, fadeInDirection, className } : Props) => {
  const fadeInRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap.fromTo(fadeInRef.current,
        {
          [direction] : fadeInDirection === 'right' ? '20px' : '-20px',
          opacity : 0 
        },
        {
          [direction] : 0,
          opacity: 1,
          duration : 0.5,
          delay : delay,
        }
      )

      return () => cxt.revert();
    }, fadeInRef)
  }, [direction, delay, fadeInDirection])

  return (
    <div 
      ref={fadeInRef}
      className={className}
    >
      {children}
    </div>
  )
}

export default FadeInComponent