"use client";

import { createContext, ReactNode, useState } from "react";
import { db } from "@/lib/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import { RecipeListType } from "@/lib/types/RecipeListType";

type RecipeListContextType = {
  recipes: RecipeListType[];
  handleDelete: (id: string) => void;
  handleAdd: (recipe: RecipeListType) => void;
};

const recipeListContext = createContext<RecipeListContextType>({
  recipes: [],
  handleDelete: () => {},
  handleAdd: () => {},
});

function RecipeListProvider({
  children,
  userId,
  initialRecipes,
}: {
  children: ReactNode;
  userId: string;
  initialRecipes: RecipeListType[];
}) {
  const [recipes, setRecipes] = useState<RecipeListType[]>(initialRecipes);

  const handleDelete = async (id: string) => {
    if (!userId) return;

    try {
      const userRef = doc(db, "recipes-users", userId);
      const filteredList = recipes.filter((recipe) => recipe.id !== id);

      await setDoc(userRef, { recipes: filteredList }, { merge: true });
      setRecipes(filteredList);

      toast.success(`Recipe Removed : ${filteredList.length}`);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      toast.error("Recipe Failed to Remove");
    }
  };

  const handleAdd = async (recipe: RecipeListType) => {
    if (!userId) return;

    try {
      const userRef = doc(db, "recipes-users", userId);
      const userDoc = await getDoc(userRef);
      const currRecipes = userDoc.data()?.recipes || [];
      const updatedRecipes = [recipe, ...currRecipes];

      await setDoc(userRef, { recipes: updatedRecipes }, { merge: true });

      setRecipes(updatedRecipes);
      toast.success(`Recipe Added : ${updatedRecipes.length}`);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      toast.error("Recipe Failed to Add");
    }
  };

  const providerValue = { recipes, handleDelete, handleAdd };

  return (
    <recipeListContext.Provider value={providerValue}>
      {children}
    </recipeListContext.Provider>
  );
}

export { recipeListContext, RecipeListProvider };
