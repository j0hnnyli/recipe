'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { twMerge } from 'tailwind-merge'
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
  const [isMounted, setIsMounted] = useState<boolean>(false);  

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setIsMounted(true)

    if(isMounted){
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
          scale: 2,
          duration: 0.5,
          ease: 'power1.inOut' 
        }
      )
    }

  }, [isMounted])

  return (
    <Image
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={twMerge(isMounted ? 'visible' : 'hidden',className)}
    />  
  )
}

export default AnimateScaleImg