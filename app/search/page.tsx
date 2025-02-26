import SearchPageSearchBar from './SearchPageSearchBar'
import SearchDisplay from './SearchDisplay'
import PaddingContainer from '@/components/PaddingContainer'

type Props = {
  searchParams : Promise<{ input: string }>
}

const SearchPage = async ({ searchParams } : Props) => {
 const { input } = await searchParams;

  return (
    <>
      <SearchPageSearchBar />
      <PaddingContainer>
        <SearchDisplay input={input}/>
      </PaddingContainer>
    </>
  )
}

export default SearchPage