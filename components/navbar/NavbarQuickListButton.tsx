'use client'

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBowlFood } from "react-icons/fa6";
import RecipeListLength from "./RecipeListLength";
import QuickListContent from "../QuickListContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

const NavbarQuickListButton = () => {
  const [ user ] = useAuthState(auth);

  if(!user) return null;

  return (
    <Sheet>
      <SheetTrigger 
        className="hover:text-primary_yellow cursor-pointer relative"
      >
        <FaBowlFood className="text-2xl" />
        <RecipeListLength length={0}/>
      </SheetTrigger>

      <QuickListContent />
    </Sheet>
  )
}

export default NavbarQuickListButton