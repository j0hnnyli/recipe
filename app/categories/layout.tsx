import React, { ReactNode } from 'react'
import CategoriesColumn from './CategoriesColumn'
import PaddingContainer from '@/components/PaddingContainer'

const layout = ({children} : { children : ReactNode}) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <CategoriesColumn />
      <PaddingContainer className="md:w-[75%] ml-auto">
        {children}
      </PaddingContainer>
    </div>
  )
}

export default layout