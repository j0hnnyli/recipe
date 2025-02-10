'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation';

const CategorySearchBar = () => {
  const router = useRouter();
  const path = usePathname();
  const category = path.split('/')[path.split('/').length - 1].toLowerCase();
  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    router.push(`/categories/${category}?input=${searchInput.toLowerCase()}`)
  }, [router, searchInput, category])

  return (
    <input type="text" 
      placeholder='Filter . . .'
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className='outline-none text-white bg-black border-b border-primary_yellow text-xl p-2' 
    />
  )
}

export default CategorySearchBar