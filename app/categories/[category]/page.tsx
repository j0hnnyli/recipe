import PaddingContainer from "@/components/PaddingContainer";
import CategoriesColumn from "../CategoriesColumn";
import { getRecipesByCategory } from "@/lib/fetchdatafns";
import { CategoryRecipeType } from "@/lib/types/categoriesType";
import Card from "@/components/Card";

type Props = {
  params: {
    category : string;
  }
}

export default async function CategoriesPage({ params } : Props) {
  const { category } = await params;
  const recipes : CategoryRecipeType[] = await getRecipesByCategory(category)

  return (
    <div className="flex flex-col md:flex-row">
      <CategoriesColumn currentCategory={category.toLowerCase()}/>

      <PaddingContainer className="md:w-[75%] ml-auto">
        <h2 className="font-kaushanScript text-primary_yellow text-4xl">
          {category[0].toUpperCase() + category.slice(1)}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {recipes.map((recipe) => (
            <Card
              key={recipe.idMeal}
              img={recipe.strMealThumb}
              title={recipe.strMeal}
              id={recipe.idMeal}
            />
          ))}
        </div>
      </PaddingContainer>
    </div>
  );
};

