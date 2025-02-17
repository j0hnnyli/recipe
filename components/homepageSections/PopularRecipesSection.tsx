'use client'

import PaddingContainer from '../PaddingContainer'
import Image from 'next/image'
import popularRecipes from '@/lib/data/popularRecipes.json'
import { useLayoutEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Link from 'next/link'

const PopularRecipesSection = () => {
  const imagineRef = useRef<HTMLDivElement>(null);
  const [popularRecipe, setPopularRecipe] = useState(popularRecipes[0]);
  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => {
    setIsLoaded(true)

    gsap.registerPlugin(ScrollTrigger)

    if(isLoaded){
      ScrollTrigger.create({
        trigger: imagineRef.current,
        start: '-=120px',
        end: document.body.offsetHeight,
        pin: true,
      })
    }
  }, [isLoaded])

  return (
    <PaddingContainer
      className={twMerge(isLoaded ? 'visible' : 'hidden', 'mb-5')}
    >
      <h2
        className='font-kaushanScript text-5xl md:text-7xl text-primary_yellow'
      >
        PopularRecipes
      </h2>

      <div className='flex flex-col md:flex-row gap-3'>
        <div
          className='h-[220px] w-full md:hidden'
        >
          {/* mobile */}
          <Image src={popularRecipe.strMealThumb} alt={popularRecipe.strMeal}
            width={300}
            height={300}
            priority
            className="w-full h-full max-h-[700px] object-cover rounded-xl mx-auto brightness-[.75]"
          />
        </div>

        {/* medium screen up */}
        <div
          ref={imagineRef}
          className='h-[220px] w-full md:w-[50%] md:h-[60vh] z-10 hidden md:flex'
        >
          <Image src={popularRecipe.strMealThumb} alt={popularRecipe.strMeal}
            width={300}
            height={300}
            priority
            className="w-full h-full max-h-[700px] object-cover rounded-xl mx-auto "
          />
        </div>

        <div 
          className='text-white w-full md:w-[50%]'
        >
          <div >
            <div className='sticky top-20 md:relative md:top-0 bg-black'>
              <Link 
                href={`/recipe/${popularRecipe.idMeal}`}
                className='text-5xl text-primary_yellow font-bold font-kaushanScript hover:text-white cursor-pointer'>
                {popularRecipe.strMeal}
              </Link>

              <div className='my-2 text-2xl'>
                {popularRecipe.strTags.map((tag) => <span key={tag} className='mr-1'>-{tag}</span>)}
              </div>

              <h2 className='text-2xl'>
                <span className='font-kaushanScript text-primary_yellow'>Category</span> :
                <span> {popularRecipe.strCategory}</span>
              </h2>

              <h2 className='text-2xl'>
                <span className='font-kaushanScript text-primary_yellow'>Cusinie</span> :
                <span> {popularRecipe.strArea}</span>
              </h2>
            </div>

            <div className='mt-10'>
              <div>
                <h2 className='font-kaushanScript text-primary_yellow text-5xl lg:text-6xl mr-5 tracking-widest'>
                  Ingredients
                </h2>
                <ul className='pl-5'>
                  {Object.keys(popularRecipe).map((key: string) => {
                    if (key.includes('strMeasure')) {
                      const measurement = popularRecipe[key as keyof typeof popularRecipe];
                      const ingredientKey = key.replace('strMeasure', 'strIngredient');
                      const ingredient = popularRecipe[ingredientKey as keyof typeof popularRecipe];
                  
                      if (measurement && ingredient) {
                        return (
                          <li key={key} 
                            className='my-1 list-disc'
                          >
                            {measurement} - {ingredient}
                          </li>
                        );
                      }
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className='text-white  mt-5 relative z-20'>
            {popularRecipes.map((recipe) => (
              <div 
                key={recipe.idMeal}
                onClick={() => setPopularRecipe(recipe)}
                className={twMerge('text-left py-3 border-b cursor-pointer', popularRecipe.idMeal === recipe.idMeal && 'text-primary_yellow' )}
              >
                <h3 
                  className={
                    twMerge('text-2xl transition-all ease-in-out', popularRecipe.idMeal === recipe.idMeal && 'ml-5')
                  }
                >
                  {recipe.strMeal}
                </h3>   
              </div>
            ))}
          </div>

        </div>
      </div>

    </PaddingContainer>
  )
}

export default PopularRecipesSection