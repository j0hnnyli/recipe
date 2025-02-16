'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const CategorySearchBar = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if(term){
      params.set('input', term.toLowerCase())
    }else{
      params.set('input', '')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  const category = pathname.split('/')[pathname.split('/').length - 1].toLowerCase();

  return (
    <input type="text" 
      placeholder={`Filter ${category[0].toUpperCase() + category.slice(1)} . . .`}
      defaultValue={searchParams.get('input')?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
      className='outline-none text-white bg-black border-b border-primary_yellow text-xl p-2 w-full' 
    />
  )
}

export default CategorySearchBar