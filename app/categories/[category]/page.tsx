import { getRecipesByCategory } from "@/lib/fetchdatafns";
import { CategoryRecipeType } from "@/lib/types/categoriesType";
import Card from "@/components/Card";
import CategorySearchBar from "../CategorySearchBar";

type Props = {
  params: {
    category : string;
  }

  searchParams: {
    input: string
  }
}

export default async function CategoriesPage({ params, searchParams } : Props) {
  const { category } = await params;
  const { input } = await searchParams
  const recipes : CategoryRecipeType[] = await getRecipesByCategory(category)

  const filtered = recipes.filter((recipe) => recipe.strMeal.toLowerCase().includes(input))

  return (
    <>
      <div className="flex items-center justify-between pr-2 ">
        <h2 className="font-kaushanScript text-primary_yellow text-4xl">
          {category[0].toUpperCase() + category.slice(1)}
        </h2>
        <CategorySearchBar />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {filtered.map((recipe) => (
          <Card
            key={recipe.idMeal}
            img={recipe.strMealThumb}
            title={recipe.strMeal}
            id={recipe.idMeal}
          />
        ))}
      </div>
    </>
  );
};

