import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  tip : string;
  time : number;
}

const HoverTip = ({ children, tip, time } : Props) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={time}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="text-sm bg-black text-primary_yellow">
          <p>{tip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default HoverTip