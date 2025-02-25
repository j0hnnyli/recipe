import SearchPageSearchBar from './SearchPageSearchBar'
import SearchDisplay from './SearchDisplay'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

type Props = {
  searchParams : Promise<{ input: string }>
}

const SearchPage = async ({ searchParams } : Props) => {
 const { input } = await searchParams;

  return (
    <>
      <SearchPageSearchBar />
      <Suspense fallback={<LoadingSpinner className='mt-5'/>}>
        <SearchDisplay input={input}/>
      </Suspense>
    </>
  )
}

export default SearchPage