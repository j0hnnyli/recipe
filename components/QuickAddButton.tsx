'use client'

import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { FaPlus } from "react-icons/fa";
import QuickListContent from "./QuickListContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { RiLoader5Line } from "react-icons/ri";


const QuickAddButton = () => {
  const [ user, loading ] = useAuthState(auth);

  if(loading){
    return <RiLoader5Line className="text-2xl text-primary_yellow animate-spin ml-5 absolute bottom-3 right-3"/>
  }

  if(!user) return null;

  return (
    <Sheet>
      <SheetTrigger 
        className="absolute bottom-3 right-3 bg-primary_yellow text-black hover:text-white hover:bg-yellow-700 flex items-center justify-center p-2 rounded-full z-30"
      >
        <FaPlus className="text-xl"/>
      </SheetTrigger>
      <QuickListContent />
    </Sheet>
  );
};

export default QuickAddButton;
