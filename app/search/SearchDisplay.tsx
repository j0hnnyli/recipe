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
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-5">
      {recipes && recipes.map((recipe) => (
        <Card
          key={recipe.idMeal}
          id={recipe.idMeal}
          img={recipe.strMealThumb}
          title={recipe.strMeal}
        />
      ))}
    </div>
  )
}

export default SearchDisplay