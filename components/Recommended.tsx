import { getRecommendedRecipes } from '@/lib/fetchdatafns';
import { RecommendRecipes } from '@/lib/types/recommendType';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  id: string;
  recommentedCategory: string;
}

const Recommended = async ({id, recommentedCategory} : Props) => {
  const recommend : RecommendRecipes[]  = await getRecommendedRecipes(recommentedCategory);
  const filtered = recommend.filter((recipe) => recipe.idMeal !== id)

  return (
    <Carousel 
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent>
        {filtered.map((recipe) => (
          <CarouselItem
           key={recipe.idMeal}
           className='basis-1/2 md:basis-1/3 lg:basis-1/4'
          >
             <Link href={`/recipe/${recipe.idMeal}`}
                className="text-white  hover:text-primary_yellow p-1"
              >
                <div>
                  <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width={300}
                    height={300}
                    className="h-full w-full rounded-lg"
                  />
                </div>
                <h2 className="font-kaushanScript text-2xl">
                  {
                    recipe.strMeal.length > 25 ?
                    recipe.strMeal.slice(0, 25) + '...' : 
                    recipe.strMeal
                  }
                </h2>
              </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute top-1/2 left-2 hidden md:flex items-center justify-center">
        <CarouselPrevious 
          className="relative left-0 translate-x-0 hover:translate-x-0 hover:bg-animehorizon_orange hover:text-white" 
        />
      </div>
      <div className="absolute top-1/2 right-2 hidden md:flex items-center justify-center">
        <CarouselNext 
          className="relative right-0 translate-x-0 hover:translate-x-0 hover:bg-animehorizon_orange hover:text-white" 
        />
      </div>
    </Carousel>
  )
}

export default Recommended