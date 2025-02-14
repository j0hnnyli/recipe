import PaddingContainer from '@/components/PaddingContainer'
import SmoothScrollContainer from '@/components/SmoothScrollContainer'
import React, { ReactNode } from 'react'
import CategorySelect from './CategorySelect'
import CategoriesSelectOptions from './CategoriesSelectOptions'
import CategorySearchBar from './CategorySearchBar'

const layout = ({ children } : { children : ReactNode }) => {
  return (
    <SmoothScrollContainer>
      <PaddingContainer>
        <div className="flex items-center justify-between gap-4 pr-2 ">
          <CategorySelect>
            <CategoriesSelectOptions />
          </CategorySelect>
          
          <CategorySearchBar />
        </div>

        <main>{children}</main>
      </PaddingContainer>
    </SmoothScrollContainer>
  )
}

export default layout