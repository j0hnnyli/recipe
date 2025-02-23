import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoPersonCircleOutline } from "react-icons/io5";
import SignOut from "./SignOut";
import RecipeListLength from "../RecipeListLength";


const UserDropDown = () => {


  return (
   <DropdownMenu>
      <DropdownMenuTrigger 
        className="text-white hover:text-primary_yellow hover:bg-black cursor-pointer ml-3 outline-none"
      >
        <IoPersonCircleOutline className="w-full h-full text-3xl"/>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-2 bg-black text-white border-primary_yellow">
        <DropdownMenuLabel className="text-center text-sm">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem className="flex items-center justify-between cursor-pointer">
          <RecipeListLength />
          <p>My Recipes</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <SignOut/>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default UserDropDown