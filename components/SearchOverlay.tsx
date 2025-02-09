'use client'

import { ReactNode } from 'react'
import PaddingContainer from './PaddingContainer'

type Props = {
  closeSearch : () => void,
  children?: ReactNode
}

const SearchOverlay = ({ closeSearch, children } : Props) => {
  return (
    <PaddingContainer className='absolute h-screen w-full z-50 bg-black opacity-80'>
      <button
        onClick={closeSearch}
        className='border border-white p-4 rounded-full absolute right-5 hover:text-black hover:bg-primary_yellow'
      > 
        x
      </button>
      <div>
        {children}
      </div>
    </PaddingContainer>
  )
}

export default SearchOverlay