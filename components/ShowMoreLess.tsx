'use client'

import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  text : string;
  className? : string;
}

const ShowMoreLess = ({ text, className='' } : Props) => {
  const [showText, setShowText] = useState<boolean>(false);
  const textShowing = showText ? text : text.slice(0, 300);

  return (
    <>
      <div 
        className={twMerge('relative',className)}
      >
        <p>{text.length > 300 ? textShowing : text}</p>

        {showText ? null : (
          <div className='absolute bottom-0 w-full h-5 backdrop-blur'></div>
        )}
      </div>

      {text.length > 300 && (
        <button 
          onClick={() => setShowText(!showText)}
          className='mt-2 hover:text-primary_yellow hover:underline cursor-pointer text-white py-1'
        >
          {showText ? 'Show Less' : 'Show More'}
        </button>
      ) }
    </>
  )
}

export default ShowMoreLess