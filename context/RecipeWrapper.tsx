import { ReactNode } from "react";
import { cookies } from "next/headers";
import getUserIdFromCookie from "@/lib/decodeCookie";
import { RecipeListProvider } from "./RecipeList";
import { admin } from "@/lib/firebase/firestoreAdmin";
import { RecipeListType } from "@/lib/types/RecipeListType";

type Props = {
  children : ReactNode;
}

const RecipeWrapper = async ({ children } : Props) => {
  const session = (await cookies()).get("session");

  if(!session) return <>{children}</>

  const sessionCookie = session?.value;
  const userId = await getUserIdFromCookie(sessionCookie) 
  
  if (!userId) return <>{children}</>;

  const docRef = admin.firestore().doc(`recipes-users/${userId}`);
  const docSnap = await docRef.get();
  const userRecipeList : RecipeListType[] = docSnap.exists ? docSnap.data()?.recipes ?? [] : []

  return (
    <RecipeListProvider userId={userId} initialRecipes={userRecipeList}>
      {children}
    </RecipeListProvider>
  )
}

export default RecipeWrapper