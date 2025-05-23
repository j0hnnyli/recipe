import { RiMenu2Line } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Logo from "../Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";

const NavbarMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-white cursor-pointer hover:text-primary_yellow">
        <RiMenu2Line className="text-2xl font-bold" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-black text-white flex flex-col border-none"
      >
        <SheetTitle className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Logo width="30px" height="30px" />
            <SheetDescription className="text-2xl font-bold text-primary_yellow font-kaushanScript tracking-widest">
              RecipeHub
            </SheetDescription>
          </div>
        </SheetTitle>

        <Link
          href="/"
          className="border-b hover:text-primary_yellow text-2xl"
        >
          <SheetClose className="flex items-center justify-center w-full p-5">
            <span className="mr-2 text-primary_yellow">
              {" "}
              <FaHome />{" "}
            </span>
            <span className="font-kaushanScript">Home</span>
          </SheetClose>
        </Link>

        <Link
          href="/search?input="
          className="border-b hover:text-primary_yellow text-2xl"
        >
          <SheetClose className="flex items-center justify-center w-full p-5">
            <span className="mr-2 text-primary_yellow">
              <FaSearch />
            </span>
            <span className="font-kaushanScript">Search</span>
          </SheetClose>
        </Link>

        <Link
          href="/categories/beef?input="
          className="border-b hover:text-primary_yellow text-2xl "
        >
          <SheetClose className="flex items-center justify-center w-full p-5">
            <span className="mr-2 text-primary_yellow">
              <BiSolidCategory />
            </span>
            <span className="font-kaushanScript">Categories</span>
          </SheetClose>
        </Link>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarMenu