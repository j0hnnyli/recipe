import PaddingContainer from '@/components/PaddingContainer'
import React from 'react'

type Props = {
  params : {
    id : string
  }
}

const RecipePage = async ({params} : Props) => {
  const { id } = await params;
  return (
    <PaddingContainer className='text-white'>
      RecipePage {id} 
    </PaddingContainer>
  )
}

export default RecipePage