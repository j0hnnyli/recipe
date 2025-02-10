'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

const SearchPageSearchBar = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>('')
  const [query] = useDebounce(searchInput, 500)

  useEffect(() => {
    if(!searchInput) return;

    router.push(`/search?input=${query.toLowerCase()}`)
  }, [searchInput, query, router])

  return (
    <div className="text-white h-[30vh]">
      <div className="w-full h-full bg-primary_yellow rounded-bl-[2rem] rounded-br-[2rem] flex flex-col items-center justify-center">
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
    </div>
  )
}

export default SearchPageSearchBar