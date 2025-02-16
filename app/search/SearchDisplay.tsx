import Card from "@/components/Card"
import { getRecipesBySearch } from "@/lib/fetchdatafns"
import { Recipe } from "@/lib/types/recipeType"

type Props = {
  input : string
}

const SearchDisplay = async ({ input } : Props) => {
  if(!input) return null;

  const recipes : Recipe[] = await getRecipesBySearch(input)

  return (
    <div className="mt-5">
      <h2 className="mb-5 text-primary_yellow font-kaushanScript text-3xl">
        {recipes?.length > 0 
          ? <>Search: <span className="font-bold">{input}</span> - <span className="font-bold">{recipes?.length} results</span></>
          : <>No results found for <span className="font-bold">{input}</span></>
        }
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {recipes && recipes.map((recipe) => (
          <Card
            key={recipe.idMeal}
            id={recipe.idMeal}
            img={recipe.strMealThumb}
            title={recipe.strMeal}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchDisplay