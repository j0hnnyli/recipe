import { getRecipesByCategory } from "@/lib/fetchdatafns";
import { CategoryRecipeType } from "@/lib/types/categoriesType";
import Card from "@/components/Card";

type Props = {
  params: Promise<{ category : string; }>
  searchParams: Promise<{ input: string }>
}

export default async function CategoriesPage({ params, searchParams } : Props) {
  const { category } = await params;
  const { input } = await searchParams;
  const recipes : CategoryRecipeType[] = await getRecipesByCategory(category)

  const filtered = recipes.filter((recipe) => recipe.strMeal.toLowerCase().includes(input.toLowerCase()))

  return (
    <>
      <h2 className="text-primary_yellow font-kaushanScript text-5xl my-5 tracking-widest">
        {category[0].toUpperCase() + category.slice(1)} : {filtered.length}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
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

