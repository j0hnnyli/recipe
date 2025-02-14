import { RiMenu2Line } from "react-icons/ri";
import { FaBowlFood } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import Logo from "../Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import NavbarSearchButton from "./NavbarSearchButton";
const Navbar = () => {

  return (
    <header className="fixed top-0 w-full text-white h-20 z-40 bg-black">
      <div className="flex items-center justify-between h-full w-full max-w-[2200px] mx-auto p-4 relative">
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
                <h2 className="text-2xl font-bold text-primary_yellow font-kaushanScript tracking-widest">
                  RecipeHub
                </h2>
              </div>
            </SheetTitle>
            <Link
              href="/"
              className="p-5 border-b hover:text-primary_yellow text-2xl"
            >
              <SheetClose className="flex items-center justify-center w-full">
                <span className="mr-2 text-primary_yellow">
                  {" "}
                  <FaHome />{" "}
                </span>
                <span className="font-kaushanScript">Home</span>
              </SheetClose>
            </Link>

            <NavbarSearchButton />

            <Link
              href="/"
              className="p-5 border-b hover:text-primary_yellow text-2xl"
            >
              <SheetClose className="flex items-center justify-center w-full">
                <span className="mr-2 text-primary_yellow">
                  <BiSolidCategory />
                </span>
                <span className="font-kaushanScript">Categories</span>
              </SheetClose>
            </Link>
          </SheetContent>
        </Sheet>

        <div className="flex items-center">
          <Logo width="30px" height="30px" />
          <h2 className="text-2xl font-bold text-primary_yellow font-kaushanScript tracking-widest">
            RecipeHub
          </h2>
        </div>

        <div>
          <FaBowlFood className="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
