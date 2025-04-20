import Link from "next/link";
import Logo from "../Logo";
import NavbarMenu from "./NavbarMenu";
import SignInButton from "./SignInButton";


const Navbar = () => {
  return (
    <header className="fixed top-0 w-full text-white h-20 z-50 bg-black">
      <div className="flex items-center justify-between h-full w-full max_width p-4 relative">
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
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
