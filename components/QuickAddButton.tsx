import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { FaPlus } from "react-icons/fa";
import QuickListContent from "./QuickListContent";

// type Props = {
//   id: string;
// }

const QuickAddButton = ( ) => {
  return (
    <Sheet>
      <SheetTrigger 
        className="absolute bottom-3 right-3 bg-primary_yellow text-black hover:text-white hover:bg-yellow-700 flex items-center justify-center p-2 rounded-full z-30"
      >
        <FaPlus className="text-xl"/>
      </SheetTrigger>
      <QuickListContent />
    </Sheet>
  )
}

export default QuickAddButton