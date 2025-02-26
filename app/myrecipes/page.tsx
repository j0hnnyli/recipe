'use client'

import { useContext, useEffect } from 'react'
import { recipeListContext } from '@/context/RecipeList'
import { auth } from '@/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { redirect } from 'next/navigation'
import { FaBowlFood } from "react-icons/fa6";
import PaddingContainer from '@/components/PaddingContainer'
import Image from 'next/image'
import Link from 'next/link'
import { FaMinus } from 'react-icons/fa'
import HoverTip from '@/components/HoverTip'
import LoadingSpinner from '@/components/LoadingSpinner'


const MyRecipesPage = () => {
  const [user, loading] = useAuthState(auth)
  const { recipes, handleDelete } = useContext(recipeListContext);
  
  useEffect(() => {
    if (!loading && !user) {
      redirect('/signin');
    }
  }, [user, loading]); 


  if (loading) {
    return (
      <div className='mt-20'>
        <LoadingSpinner/>
      </div>
    )
  }

  return (
    <PaddingContainer>
      <h2 className='text-primary_yellow text-4xl flex items-center justify-center'>
        <span className='mx-3'><FaBowlFood /></span>
        <span className='tracking-widest'> My Recipes</span>
      </h2>

      <div className='h-1 bg-primary_yellow rounded-xl my-5'></div>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="hover:border border-primary_yellow rounded-xl p-1 relative"
          >
            <Link href={`/recipe/${recipe.id}`} className="absolute w-full h-full z-10"></Link>
      
            <div className="relative">
              <Image
                src={recipe.img}
                alt={recipe.name}
                width={300}
                height={300}
                priority
                className="h-full w-full rounded-lg"
              />

              <HoverTip tip="remove" time={100}>
                <button
                  onClick={() => handleDelete(recipe.id)}
                  className="absolute bottom-3 right-3 bg-red-500 text-black hover:text-white hover:bg-red-700 flex items-center justify-center p-2 rounded-full z-30"
                >
                  <FaMinus className="text-xl"/>
                </button>
              </HoverTip>
            </div>
            <h2 className="text-white font-kaushanScript text-2xl">
              {
                recipe.name.length > 25 ?
                recipe.name.slice(0, 25) + '...' : 
                recipe.name
              }
            </h2>
          </div>
        ))}
      </div>

    </PaddingContainer>
  )
}

export default MyRecipesPage;