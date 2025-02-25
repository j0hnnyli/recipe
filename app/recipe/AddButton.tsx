'use client'

import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from '@/firebase/config'
import { RiLoader5Line } from 'react-icons/ri'
import { recipeListContext } from '@/context/RecipeList'
import { FaMinus, FaPlus } from 'react-icons/fa'

type Props = {
  id: string;
  img: string;
  name: string;
}

const AddButton = ( {id, img, name} : Props) => {
  const [user, loading] = useAuthState(auth);
  const { recipes, handleAdd, handleDelete } = useContext(recipeListContext)
  
  if(!user) return null;

  const match = recipes.find((recipe) => recipe.id === id)

  if(loading){
    return <RiLoader5Line className="text-2xl text-primary_yellow animate-spin"/>
  }

  return (
    <>
      {match ? (
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-500 text-black hover:text-white hover:bg-red-700 flex items-center justify-center py-1 px-3 rounded-sm"
        >
          <FaMinus className="text-xl"/>
          <span className='ml-2'>Remove</span>
        </button>
      ) : (
        <button 
          className="bg-primary_yellow text-black hover:text-white hover:bg-yellow-700 flex items-center justify-center py-1 px-3 rounded-sm"
          onClick={() => handleAdd({id , img, name})}
        >
          <FaPlus className="text-xl"/>
          <span className='ml-2'>Add</span>
        </button>
      )}
    </>
  )
}

export default AddButton