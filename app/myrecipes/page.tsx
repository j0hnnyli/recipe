"use client";

import { useContext } from "react";
import { recipeListContext } from "@/context/RecipeList";
import { FaBowlFood } from "react-icons/fa6";
import PaddingContainer from "@/components/PaddingContainer";
import Image from "next/image";
import Link from "next/link";
import RemoveButton from "./RemoveButton";
import EmtpyList from "./EmtpyList";

const MyRecipesPage = () => {
  const { recipes } = useContext(recipeListContext);

  return (
    <PaddingContainer>
      <h2 className="text-primary_yellow text-4xl flex items-center justify-center">
        <span className="mx-3">
          <FaBowlFood />
        </span>
        <span className="tracking-widest"> My Recipes</span>
      </h2>

      <div className="h-1 bg-primary_yellow rounded-xl my-5"></div>


      {!recipes.length ? <EmtpyList/> : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="hover:border border-primary_yellow rounded-xl p-1 relative"
            >
              <Link
                href={`/recipe/${recipe.id}`}
                className="absolute w-full h-full z-10"
              ></Link>

              <div className="relative">
                <Image
                  src={recipe.img}
                  alt={recipe.name}
                  width={300}
                  height={300}
                  priority
                  className="h-full w-full rounded-lg"
                />

                <RemoveButton id={recipe.id} />
              </div>
              <h2 className="text-white font-kaushanScript text-2xl">
                {recipe.name.length > 25
                  ? recipe.name.slice(0, 25) + "..."
                  : recipe.name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </PaddingContainer>
  );
};

export default MyRecipesPage;
