"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiLoader5Line } from "react-icons/ri";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);

  const handleResetPassword = async () => {
    if (email === "") return;

    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSend(true);
      setEmail("");
    } catch (err) {
      setError(true);
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      setTimeout(() => {
        setError(false);
      }, 1500);
    }

    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger className="mt-5 text-sm hover:text-primary_yellow">
        FORGOT PASSWORD?
      </DialogTrigger>
      <DialogContent className="bg-black text-white border-primary_yellow w-[95%]">
        <DialogHeader>
          <DialogTitle className="text-primary_yellow">
            FORGOT PASSWORD?
          </DialogTitle>
          <DialogDescription className="text-white flex items-center">
            <span>Email your sign up : </span>
            {error && (
              <span className="text-red-500 text-md ml-3">
                Error, Try Again{" "}
              </span>
            )}
            {send && (
              <span className="text-green-500 text-md ml-3">Email Send </span>
            )}
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email . . ."
          className="bg-black outline-none border-b border-primary_yellow p-2"
        />
        <button
          onClick={handleResetPassword}
          className="py-2 px-4 bg-primary_yellow text-black"
        >
          {isLoading ? (
            <RiLoader5Line className="text-xl animate-spin mx-auto" />
          ) : (
            "SEND"
          )}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPassword;
