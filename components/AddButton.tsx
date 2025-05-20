import React from "react";
import { cookies } from "next/headers";
import QuickAddButton from "./QuickAddButton";
import RecipePageAddButton from "./RecipePageAddButton";

type Props = {
  id: string;
  img: string;
  name: string;
  type: "Quick" | "Add";
};

const AddButton = async ({ id, img, name, type }: Props) => {
  const cookie = await cookies();
  const user = cookie.get("session");

  return (
    <>
      {type === "Quick" ? (
        <QuickAddButton
          id={id}
          img={img}
          name={name}
          user={user !== undefined}
        />
      ) : (
        <RecipePageAddButton id={id} img={img} name={name} user={user !== undefined} />
      )}
    </>
  );
};

export default AddButton;
