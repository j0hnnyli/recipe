import Link from "next/link";
import Logo from "../Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarQuickListButton from "./NavbarQuickListButton";

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

        <NavbarQuickListButton/>
      </div>
    </header>
  );
};

export default Navbar;
