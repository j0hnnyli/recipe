import HoverTip from '@/components/HoverTip'
import { recipeListContext } from '@/context/RecipeList';
import React, { useContext, useState } from 'react'
import { FaMinus } from 'react-icons/fa';
import { RiLoader5Line } from 'react-icons/ri';

type Props = {
  id: string;
}

const RemoveButton = ({id} : Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleDelete } = useContext(recipeListContext);

  const removeRecipe = async (id: string) => {
    setIsLoading(true)
    await handleDelete(id)
    setIsLoading(false)
  }

  return (
    <HoverTip tip="remove" time={100}>
      <button
        onClick={() => removeRecipe(id)}
        className="absolute bottom-3 right-3 bg-red-500 text-black hover:text-white hover:bg-red-700 flex items-center justify-center p-2 rounded-full z-30"
      >
        {
          isLoading ? (
            <RiLoader5Line className="text-xl text-black animate-spin" />
          ) : (
            <FaMinus className="text-xl" />
          )
        }
      </button>
    </HoverTip>
  )
}

export default RemoveButton