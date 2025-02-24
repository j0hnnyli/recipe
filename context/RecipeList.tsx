'use client'

import { createContext, ReactNode, useEffect, useState } from "react";
import { db, auth } from "@/firebase/config";
import {doc, getDoc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "sonner"

type RecipeListType = {
  id: string;
  img: string;
  name: string;
}

type RecipeListContextType = {
  recipes: RecipeListType[];
  handleDelete: (id: string) => void;
  handleAdd : (recipe: RecipeListType) => void;
}

const recipeListContext = createContext<RecipeListContextType>({
  recipes : [],
  handleDelete : () => {},
  handleAdd : () => {},
})


function RecipeListProvider({ children } : { children : ReactNode }){
  const [recipes, setRecipes] = useState<RecipeListType[]>([]);
  const [ user ] = useAuthState(auth)
  
  const handleDelete = async (id : string) => {
    if (!user?.uid) return;

    try{
      const userRef = doc(db, "recipes-users", user?.uid);
      const filteredList = recipes.filter(((recipe) => recipe.id !== id))
      
      await setDoc(userRef, {recipes : filteredList}, { merge: true })
      setRecipes(filteredList)
      
      toast.success(`Recipe Removed : ${filteredList.length}`)
    }catch(err){
      if(err instanceof Error){
        throw new Error(err.message)
      }
      toast.error('Recipe Failed to Remove')
    }
  }
  
  const handleAdd = async (recipe : RecipeListType) => {
    if (!user?.uid) return;
    
    try{
      const userRef = doc(db, "recipes-users", user?.uid);
      const userDoc = await getDoc(userRef);
      const currRecipes = userDoc.data()?.recipes || [];
      const updatedRecipes = [recipe, ...currRecipes];
      
      await setDoc(userRef, { recipes : updatedRecipes }, { merge: true });
      
      setRecipes(updatedRecipes)
      toast.success(`Recipe Added : ${updatedRecipes.length}`)
    }catch(err){
      if(err instanceof Error){
        throw new Error(err.message)
      }
      toast.error('Recipe Failed to Add')
    }
  }
  
  useEffect(() => {
    if(!user?.uid) return ;

    const docRef = doc(db, "recipes-users", user.uid);
    const getUserRecipeList = async () => {
      try{
        const data = await getDoc(docRef)
        
        const recipeList = data.data()
        if(!recipeList) return;
        setRecipes(recipeList.recipes)
      }catch(err){
        if(err instanceof Error){
          console.log(err.message)
        }
      }
    }

    getUserRecipeList()
  }, [user?.uid])

  const providerValue = {recipes, handleDelete, handleAdd}

  return (
    <recipeListContext.Provider value={providerValue}>
      {children}
    </recipeListContext.Provider>
  )
}

export {recipeListContext, RecipeListProvider}