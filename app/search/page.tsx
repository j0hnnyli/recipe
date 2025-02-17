import SearchPageSearchBar from './SearchPageSearchBar'
import SearchDisplay from './SearchDisplay'
import SmoothScrollContainer from '@/components/SmoothScrollContainer'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

type Props = {
  searchParams : Promise<{ input: string }>
}

const SearchPage = async ({ searchParams } : Props) => {
 const { input } = await searchParams;

  return (
    <SmoothScrollContainer>
      <SearchPageSearchBar />
      <Suspense fallback={<LoadingSpinner className='mt-5'/>}>
        <SearchDisplay input={input}/>
      </Suspense>
    </SmoothScrollContainer>
  )
}

export default SearchPage