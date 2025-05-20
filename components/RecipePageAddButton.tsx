"use client";

import React, { useContext, useState } from "react";
import { RiLoader5Line } from "react-icons/ri";
import { recipeListContext } from "@/context/RecipeList";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {
  id: string;
  img: string;
  name: string;
  user: boolean;
};

const RecipePageAddButton = ({ id, img, name, user }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { recipes, handleAdd, handleDelete } = useContext(recipeListContext);

  if (!user) return null;

  const match = recipes.find((recipe) => recipe.id === id);

  const addRecipe = async () => {
    setIsLoading(true);
    await handleAdd({ id, img, name });
    setIsLoading(false);
  };

  const removieRecipe = async () => {
    setIsLoading(true);
    await handleDelete(id);
    setIsLoading(false);
  };

  return (
    <>
      {match ? (
        <button
          onClick={removieRecipe}
          className="bg-red-500 text-black hover:text-white hover:bg-red-700 flex items-center justify-center py-1 px-3 rounded-sm mr-5"
        >
          {isLoading ? (
            <RiLoader5Line className="text-xl text-primary_yellow animate-spin" />
          ) : (
            <FaMinus className="text-xl" />
          )}
          <span className="ml-2">Remove</span>
        </button>
      ) : (
        <button
          className="bg-primary_yellow text-black hover:text-white hover:bg-yellow-700 flex items-center justify-center py-1 px-3 rounded-sm mr-5"
          onClick={addRecipe}
        >
          {isLoading ? (
            <RiLoader5Line className="text-xl text-primary_yellow animate-spin" />
          ) : (
            <FaPlus className="text-xl" />
          )}
          <span className="ml-2">Add</span>
        </button>
      )}
    </>
  );
};

export default RecipePageAddButton;
