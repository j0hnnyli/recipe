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
import Link from "next/link";


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
          <Link 
            href="/myrecipes"
          >
            <DropdownMenuItem className="cursor-pointer flex items-center justify-between w-full">
              <RecipeListLength />
              <p>My Recipes</p>
            </DropdownMenuItem>
          </Link>
        <DropdownMenuSeparator/>
        <SignOut/>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}

export default UserDropDown