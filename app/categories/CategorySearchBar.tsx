'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { useDebounce } from 'use-debounce';

const CategorySearchBar = () => {
  const router = useRouter();
  const path = usePathname();
  const category = path.split('/')[path.split('/').length - 1].toLowerCase();
  const [searchInput, setSearchInput] = useState<string>('')
    const [query] = useDebounce(searchInput, 500)

  useEffect(() => {
    router.push(`/categories/${category}?input=${query.toLowerCase()}`)
  }, [router, query, category])

  return (
    <input type="text" 
      placeholder={`Filter ${category[0].toUpperCase() + category.slice(1)} . . .`}
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className='outline-none text-white bg-black border-b border-primary_yellow text-xl p-2 w-full' 
    />
  )
}

export default CategorySearchBar