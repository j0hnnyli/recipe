import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const PaddingContainer = ({className, children} : {
  className? : string,
  children: ReactNode,
}) => {
  return (
    <div
      className={twMerge('p-5', className)}    
    >
      { children }
    </div>
  )
}

export default PaddingContainer