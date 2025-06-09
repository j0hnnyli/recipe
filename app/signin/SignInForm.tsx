"use client";

import { createCookie } from "../actions/auth/signin";
import { FormEvent, MouseEvent, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiLoader5Line } from "react-icons/ri";
import ForgotPassword from "./ForgotPassword";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const signIn = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      const idToken = await userCred.user.getIdToken();
      await createCookie(idToken);
      router.back();
    } catch(err) {
      if(err instanceof FirebaseError){
        const errorCode = err.code;
        const readableCode = errorCode.replace("auth/", "").replace(/-/g, " ");
        setError(readableCode);
      }
    }

    setIsLoading(false);
  };

  return (
    <form className="px-1" onSubmit={(e) => signIn(e)}>
      <div className="mb-5 border-b border-primary_yellow">
        <label htmlFor="email" className="block my-2">
          Email :
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Example@gmail.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error.length > 0) {
              setError("");
            }
          }}
          className="w-full py-2 text-white bg-black outline-none"
        />
      </div>

      <div className="mb-5 border-b border-primary_yellow">
        <label htmlFor="password" className="block my-2">
          Password :
        </label>
        <div className="flex">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              if (error.length > 0) {
                setError("");
              }
            }}
            className="w-full py-2 text-white bg-black  outline-none"
          />
          <button onClick={(e) => handleShowPassword(e)}>
            {
              showPassword ? 
              <FaRegEye className="text-xl text-white hover:text-primary_yellow" /> : 
              <RiEyeCloseLine className="text-xl text-white hover:text-primary_yellow"/>
            }
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <button
          disabled={isLoading || email === "" || pass === ""}
          className="py-2 px-4 bg-primary_yellow text-black font-kaushanScript hover:bg-yellow-700 hover:text-white cursor-pointer"
        >
          {isLoading ? (
            <RiLoader5Line className="text-xl animate-spin" />
          ) : (
            "Sign In"
          )}
        </button>
        {error.length > 0 && (
          <p className="text-red-500 font-bold ml-3">{error}</p>
        )}
      </div>

      <ForgotPassword />
    </form>
  );
};

export default SignInForm;
