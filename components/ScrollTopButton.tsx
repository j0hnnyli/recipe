'use client'

import { FaArrowUp } from "react-icons/fa6";


const ScrollTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior : "smooth"
    })
  }

  return (
    <button onClick={handleScrollTop}
      className="flex flex-col justify-center items-center absolute bottom-5 left-5 text-gray-400 hover:text-yellow-400 transition-colors"
    >
      <FaArrowUp className="text-xl text-primary_yellow"/>
      <p className="text-sm ">
        Scroll Top
      </p>
    </button>
  )
}

export default ScrollTopButton