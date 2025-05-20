import PaddingContainer from "@/components/PaddingContainer";
import Recommended from "@/components/Recommended";
import ShowMoreLess from "@/components/ShowMoreLess";
import { getRecipe } from "@/lib/fetchdatafns";
import { Recipe } from "@/lib/types/recipeType";
import { FaYoutube } from "react-icons/fa";
import React, { Suspense } from "react";
import AnimateIngredients from "../AnimateIngredients";
import AnimateScaleImg from "@/app/recipe/AnimateScaleImg";
import Link from "next/link";
import AddButton from "@/components/AddButton";

type Props = {
  params: Promise<{ id: string }>;
};

const RecipePage = async ({ params }: Props) => {
  const { id } = await params;
  const recipe: Recipe = await getRecipe(id);

  return (
    <PaddingContainer className="max_width">
      <div className="pb-5 border-b border-primary_yellow">
        <h2 className="font-kaushanScript text-5xl tracking-widest text-primary_yellow ">
          {recipe.strMeal}
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-5 ">
          <div className="text-xl flex items-center text-white">
            <p>Cateogry : {recipe.strCategory}</p>
            <span className="mx-2">|</span>
            <p>Cusinie : {recipe.strArea}</p>
          </div>

          <div className="flex items-center mt-2 md:mt-0">
            <AddButton
              id={recipe.idMeal}
              img={recipe.strMealThumb}
              name={recipe.strMeal}
              type="Add"
            />

            {recipe.strYoutube && (
              <Link
                href={recipe.strYoutube}
                target="_blank"
                className="bg-primary_yellow text-black hover:text-white hover:bg-yellow-700 flex items-center justify-center py-1 px-3 rounded-sm"
              >
                <FaYoutube className="text-xl" />
                <span className="ml-2">Tutorial</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col-reverse md:flex-row pb-5 border-b border-primary_yellow gap-5">
        <div className="md:w-[50%] text-center">
          <h2 className="font-kaushanScript text-5xl tracking-widest text-primary_yellow">
            Ingredients
          </h2>
          <ul className="text-white text-xl 2xl:text-4xl tracking-widest">
            {Object.keys(recipe).map((key: string) => {
              if (key.includes("strMeasure")) {
                const measurement = recipe[key as keyof typeof recipe];
                const ingredientKey = key.replace(
                  "strMeasure",
                  "strIngredient"
                );
                const ingredient = recipe[ingredientKey as keyof typeof recipe];

                if (measurement && ingredient) {
                  return (
                    <AnimateIngredients
                      key={key}
                      className="my-1 list-none relative"
                    >
                      {measurement} - {ingredient}
                    </AnimateIngredients>
                  );
                }
              }
            })}
          </ul>
        </div>
        <div className="md:w-[50%] max-h-[750px] overflow-hidden">
          <AnimateScaleImg
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            width={400}
            height={500}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="mt-5">
        <h2 className="font-kaushanScript text-5xl tracking-widest text-primary_yellow">
          Instruction
        </h2>
        <ShowMoreLess
          className="text-white mt-5 transition-all ease-in-out"
          text={recipe.strInstructions}
        />
      </div>

      <Suspense
        fallback={
          <div className="h-72 bg-gray-500 rounded-xl animate-pulse"></div>
        }
      >
        <div className="mt-5">
          <h2 className="font-kaushanScript text-5xl tracking-widest text-primary_yellow">
            Recommended
          </h2>
          <Recommended
            id={recipe.idMeal}
            recommentedCategory={recipe.strArea}
          />
        </div>
      </Suspense>
    </PaddingContainer>
  );
};

export default RecipePage;
