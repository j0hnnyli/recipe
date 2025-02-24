'use client'

import { recipeListContext } from '@/context/RecipeList';
import React, { useContext } from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
}

const RecipeListLength = ({ className } : Props) => {
  const { recipes } = useContext(recipeListContext)

  return (
    <p className={
      twMerge('text-sm bg-red-500 text-primary_yellow px-1 rounded-full', className)
      }
    >
      {recipes.length}
    </p>
  )
}

export default RecipeListLength