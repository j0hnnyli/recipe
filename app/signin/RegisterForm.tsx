"use client";

import { FormEvent, MouseEvent, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiLoader5Line } from "react-icons/ri";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "@/lib/firebase/config";
import { FirebaseError } from "firebase/app";
import { twMerge } from "tailwind-merge";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [confrimPass, setConfrimPass] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassowrd] =
    useState<boolean>(false);
  const [notMatch, setNotMatch] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSucess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleShowPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfirmPassowrd(!showConfirmPassword);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email === "" || pass === "" || confrimPass === "") return;

    if (pass !== confrimPass) {
      setNotMatch(true);
      return;
    }

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      setSucess(true);
      setEmail("");
      setPass("");
      setConfrimPass("");
      setTimeout(() => setSucess(false), 1500);
    } catch (err) {
      if (err instanceof FirebaseError) {
        const errorCode = err.code; 
        const readableCode = errorCode.replace("auth/", "").replace(/-/g, " "); 
        setError(readableCode);
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="px-1">
      <div className="mb-5">
        <label htmlFor="email" className="block my-2">
          Email :
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
              setEmail(e.target.value)
              if(error.length > 0){
                setError('')
              }
            }
          }
          placeholder="Example@gmail.com"
          className={twMerge("w-full py-2 text-white bg-black border-b border-primary_yellow outline-none", error.length > 0 && "border-b-red-500")}
        />
      </div>

      <div className={twMerge("mb-5 border-b border-primary_yellow", notMatch && 'border-b-red-500')}>
        <label htmlFor="password" className="block my-2">
          Password :
        </label>
        <div className="flex">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              if (notMatch) setNotMatch(false);
            }}
            placeholder="Password"
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

      <div className={twMerge("mb-5 border-b border-primary_yellow", notMatch && 'border-b-red-500')}>
        <label htmlFor="confirm" className="block my-2">
          {" "}
          Confirm Password :
        </label>
        <div className="flex">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confrimPass}
            onChange={(e) => {
              setConfrimPass(e.target.value);
              if (notMatch) setNotMatch(false);
            }}
            id="confirm"
            placeholder="Confirm Password"
            className="w-full py-2 text-white bg-black outline-none"
          />
          <button onClick={(e) => handleShowConfirmPassword(e)}>
            {
              showConfirmPassword ? 
              <FaRegEye className="text-xl text-white hover:text-primary_yellow" /> : 
              <RiEyeCloseLine className="text-xl text-white hover:text-primary_yellow"/>
            }
          </button>
        </div>
      </div>

      {notMatch && <p className="text-red-500">Passwords Does Not Match</p>}

      <div className="flex items-center">
        <button
          disabled={isLoading || pass === "" || confrimPass === ""}
          className="py-2 px-4 bg-primary_yellow text-black font-kaushanScript hover:bg-yellow-700 hover:text-white my-5"
        >
          {isLoading ? (
            <RiLoader5Line className="text-xl animate-spin" />
          ) : (
            "Register"
          )}
        </button>
        {success && <p className="text-green-500 font-bold ml-3">Success, Account created! </p>}
        {error.length > 0 && (
          <p className="text-red-500 font-bold ml-3">{error}</p>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
