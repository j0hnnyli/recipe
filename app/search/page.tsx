import React from 'react'
import SearchPageSearchBar from './SearchPageSearchBar'
import SearchDisplay from './SearchDisplay'
import SmoothScrollContainer from '@/components/SmoothScrollContainer'

type Props = {
  searchParams : {
    input: string
  }
}

const SearchPage = async ({ searchParams } : Props) => {
  const { input } = await searchParams;

  return (
    <SmoothScrollContainer>
      <SearchPageSearchBar />
      <SearchDisplay input={input}/>
    </SmoothScrollContainer>
  )
}

export default SearchPage