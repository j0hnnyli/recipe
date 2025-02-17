import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  // SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import { FaBowlFood } from "react-icons/fa6";
import RecipeListLength from "./RecipeListLength";


const NavbarQuickListButton = () => {
  return (
    <Sheet>
      <SheetTrigger 
        className="hover:text-primary_yellow cursor-pointer relative"
      >
        <FaBowlFood className="text-2xl" />
        <RecipeListLength length={0}/>
      </SheetTrigger>

      <SheetContent 
        side='right' 
        className="bg-black text-white border-none"
      >
        <SheetTitle className="flex flex-col items-center">
          <div className="flex flex-col items-center text-primary_yellow relative">
            <RecipeListLength length={0} className="text-lg"/>
            <FaBowlFood className="text-6xl" />
            <SheetDescription className="text-2xl font-bold text-primary_yellow font-kaushanScript tracking-widest">
              Guest
            </SheetDescription>
          </div>
        </SheetTitle>
        <div className="h-1 w-[90%] bg-white rounded-lg mx-auto my-5"></div>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarQuickListButton