'use client'

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { RiLoader5Line } from "react-icons/ri";
import { recipeListContext } from "@/context/RecipeList";
import { useContext, useState } from "react";
import HoverTip from "./HoverTip";

type Props = {
  id: string;
  img: string;
  name: string;
}

const QuickAddButton = ({ id, img, name } : Props) => {
  const [ user, loading ] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { recipes, handleAdd, handleDelete } = useContext(recipeListContext)
  
  if(!user) return null;

  const match = recipes.find((recipe) => recipe.id === id)

  const addRecipe = async () => {
    setIsLoading(true)
    await handleAdd({id, img, name})
    setIsLoading(false)
  }

  const removeRecipe = async () => {
    setIsLoading(true)
    await handleDelete(id)
    setIsLoading(false)
  }

  if(loading){
    return <RiLoader5Line className="text-2xl text-primary_yellow animate-spin ml-5 absolute bottom-3 right-3"/>
  }

  return (
    <>
      {match ? (
        <HoverTip tip='Remove' time={100}>
          <button
            disabled={isLoading}
            onClick={removeRecipe}
            className="absolute bottom-3 right-3 bg-red-500 text-black hover:text-white hover:bg-red-700 flex items-center justify-center p-2 rounded-full z-30"
          >
            {isLoading ? (
              <RiLoader5Line className="text-xl text-black animate-spin" />
            ) : (
              <FaMinus className="text-xl" />
            )}
          </button>
        </HoverTip>
      ) : (
        <HoverTip tip='Add' time={100}>
          <button 
            disabled={isLoading}
            className="absolute bottom-3 right-3 bg-primary_yellow text-black hover:text-white hover:bg-yellow-700 flex items-center justify-center p-2 rounded-full z-30"
            onClick={addRecipe}
          >
            {isLoading ? (
              <RiLoader5Line className="text-xl text-black animate-spin" />
            ) : (
              <FaPlus className="text-xl" />
            )}
          </button>
        </HoverTip>
      )}
    </>
  );
};

export default QuickAddButton;
