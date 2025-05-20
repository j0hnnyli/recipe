import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import HoverTip from "../HoverTip";
import UserDropDown from "./userdropdown/UserDropDown";
import { cookies } from "next/headers"

const SignInButton = async () => {
  const cookie = await cookies();
  const user = cookie.get('session');

  return (
    <>
      {user ? (
        <UserDropDown />
      ) : (
        <Link href="/signin">
          <HoverTip tip="Sign In" time={100}>
            <IoPerson className="text-2xl ml-5 hover:text-primary_yellow cursor-pointer" />
          </HoverTip>
        </Link>
      )}
    </>
  );
};

export default SignInButton;
