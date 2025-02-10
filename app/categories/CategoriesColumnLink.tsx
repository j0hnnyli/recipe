'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type Props = {
  href: string;
  title: string;
}

const CategoriesColumnLink = ({ href, title } : Props) => {
  const path = usePathname();
  const category = path.split('/')[path.split('/').length - 1].toLowerCase();

  return (
    <Link
      href={href}
    >
      <div 
        className={
          twMerge("py-2 px-4 text-2xl mr-2 font-kaushanScript cursor-pointer hover:bg-yellow-700 rounded-xl md:mt-2 ", 
            category === title.toLowerCase() && 'bg-yellow-700'
          )
        }
      >
        {title}
      </div>
    </Link>
  )
}

export default CategoriesColumnLink