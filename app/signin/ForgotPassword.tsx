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
import { verifyEmailBeforeReset } from "../actions/resetPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);

  const handleResetPassword = async () => {
    if (email.trim() === "") return;
    const trimmedEmail = email.trim();

    setIsLoading(true);

    try {
      const { exist } = await verifyEmailBeforeReset(trimmedEmail);

      if (exist) {
        await sendPasswordResetEmail(auth, trimmedEmail);
        setSend(true);
        setEmail("");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
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
          <DialogDescription className="text-white flex flex-col">
            <span>Email your sign up : </span>
            <span>
              {error.length > 0 && (
                <span className="text-red-500 text-md">{error}</span>
              )}
              {send && (
                <span className="text-green-500 text-md">Email Send </span>
              )}
            </span>
          </DialogDescription>
        </DialogHeader>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error.length > 0) {
              setError("");
            }
          }}
          placeholder="Email . . ."
          className="bg-black outline-none border-b border-primary_yellow p-2"
        />
        <button
          disabled={email.trim() === "" || isLoading}
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
