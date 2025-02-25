import PaddingContainer from '@/components/PaddingContainer'
import React, { ReactNode } from 'react'
import CategorySelect from './CategorySelect'
import CategoriesSelectOptions from './CategoriesSelectOptions'
import CategorySearchBar from './CategorySearchBar'

const layout = ({ children } : { children : ReactNode }) => {
  return (
    <PaddingContainer>
      <div className="flex items-center justify-between gap-4 pr-2 ">
        <CategorySelect>
          <CategoriesSelectOptions />
        </CategorySelect>
        
        <CategorySearchBar />
      </div>

      <main>{children}</main>
    </PaddingContainer>
  )
}

export default layout