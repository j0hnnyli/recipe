'use client'
import { ReactNode, useEffect, useRef } from "react";

const SmoothScrollContainer = ({children} : { children : ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const scroll = new LocomotiveScroll()
      }
    )()
  }, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default SmoothScrollContainer