'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import {
  Select,
} from "@/components/ui/select"


const CategorySelect = ({children} : {children: ReactNode}) => {
  const router = useRouter();

  const handleValueChange = (value: string)=> {
    router.push(`/categories/${value}?input=`)
  }

  return (
    <Select onValueChange={(value) => handleValueChange(value)}>
      {children}
    </Select>
  )
}

export default CategorySelect