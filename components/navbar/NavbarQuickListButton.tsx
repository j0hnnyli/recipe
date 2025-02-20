import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBowlFood } from "react-icons/fa6";
import RecipeListLength from "./RecipeListLength";
import QuickListContent from "../QuickListContent";


const NavbarQuickListButton = () => {
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