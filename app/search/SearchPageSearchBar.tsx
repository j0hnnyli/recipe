'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import gsap from 'gsap';
import { twMerge } from 'tailwind-merge';

const SearchPageSearchBar = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState<string>('')
  const [query] = useDebounce(searchInput, 500)

  useLayoutEffect(() => {
    setIsLoaded(true)

    if(isLoaded){
      gsap.from(containerRef.current, { 
        y: '-50vh',
        duration: 0.6,
        ease: "power1.in"
      })
    }
  }, [isLoaded])


  useEffect(() => {
    if(!searchInput) return;

    router.push(`/search?input=${query.toLowerCase()}`)
  }, [searchInput, query, router])

  return (
    <div 
      ref={containerRef}
      className={
        twMerge("w-full h-[30vh] bg-primary_yellow rounded-bl-[2rem] rounded-br-[2rem] flex flex-col items-center justify-center",
          isLoaded ? 'visible' : 'hidden'
        )
      }
    >
      <h3 className='text-black font-kaushanScript text-4xl mb-5'>Explore Tasty Recipes</h3>
      <div className='w-[80%] border-2 border-white rounded-full overflow-hidden'>
        <input type="text"
          placeholder='Search . . .'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='borer-none text-white bg-black outline-none w-full p-2 text-center text-2xl' 
        />
      </div>
    </div>
  )
}

export default SearchPageSearchBar