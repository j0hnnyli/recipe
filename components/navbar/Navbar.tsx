import Link from "next/link";
import Logo from "../Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarQuickListButton from "./NavbarQuickListButton";
import { IoPerson } from "react-icons/io5";
import HoverTip from "../HoverTip";


const Navbar = () => {
  return (
    <header className="fixed top-0 w-full text-white h-20 z-40 bg-black">
      <div className="flex items-center justify-between h-full w-full max-w-[2200px] mx-auto p-4 relative">
        <NavbarMenu />

        <div className="flex items-center">
          <Logo width="30px" height="30px" />
          <Link
            href="/"
            className="text-2xl font-bold text-primary_yellow font-kaushanScript tracking-widest hover:text-white"
          >
            RecipeHub
          </Link>
        </div>
        <div className="flex items-center">
          <HoverTip tip='My Recipes' time={100}>
            <NavbarQuickListButton/>
          </HoverTip>
          <HoverTip tip='Sign In' time={100}>
            <IoPerson className="text-2xl ml-5 hover:text-primary_yellow cursor-pointer"/>
          </HoverTip>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
