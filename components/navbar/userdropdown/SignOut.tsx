"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CiLogout } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { clearCookieSession } from "@/app/actions/auth/logout";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    await clearCookieSession();
    router.refresh();
  };

  return (
    <DropdownMenuItem
      onClick={handleSignOut}
      className="flex items-center justify-between cursor-pointer"
    >
      <CiLogout className="text-3xl" />
      <p>Sign Out</p>
    </DropdownMenuItem>
  );
};

export default SignOut;
