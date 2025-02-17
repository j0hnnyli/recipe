import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
  length : number,
  className?: string;
}

const RecipeListLength = ({ length, className } : Props) => {

  return (
    <p className={
      twMerge('absolute top-[-5px] right-[-5px] text-sm bg-red-500 text-primary_yellow px-1 rounded-full', className)
      }
    >
      {length}
    </p>
  )
}

export default RecipeListLength