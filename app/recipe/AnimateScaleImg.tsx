'use client'

import { useRef, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'

type Props = {
  src: string,
  alt: string,
  className?: string,
  width: number,
  height: number,
}

const AnimateScaleImg = ({src, alt, className, width, height} : Props) => {
  const imgRef = useRef<HTMLImageElement>(null); 

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cxt = gsap.context(() => {
      gsap.fromTo(imgRef.current, 
        {
          scale: 1,
        },
        {
          scrollTrigger: {
            trigger: imgRef.current,
            start: 'top top+=100px',
            end: 'bottom',
            scrub: true,
          },
          scale: 1.2,
          duration: 0.5,
          ease: 'power1.inOut' 
        }
      )
    }, imgRef)
   
    return () => cxt.revert();
  }, [])

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={className}
    />  
  )
}

export default AnimateScaleImg