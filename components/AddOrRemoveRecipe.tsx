"use client";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiLoader5Line } from "react-icons/ri";
import { recipeListContext } from "@/context/RecipeList";
import { useContext, useState } from "react";
import HoverTip from "./HoverTip";

type Props = {
  id: string;
  img: string;
  name: string;
  user : boolean;
};

const AddOrRemoveRecipe = ({ id, img, name, user }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { recipes, handleAdd, handleDelete } = useContext(recipeListContext);
  
  if(!user) return null;
  
  const match = recipes.find((recipe) => recipe.id === id);

  const addRecipe = async () => {
    setIsLoading(true);
    await handleAdd({ id, img, name });
    setIsLoading(false);
  };

  const removeRecipe = async () => {
    setIsLoading(true);
    await handleDelete(id);
    setIsLoading(false);
  };


  return (
    <>
      {match ? (
        <HoverTip tip="Remove" time={100}>
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
        <HoverTip tip="Add" time={100}>
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

export default AddOrRemoveRecipe;
