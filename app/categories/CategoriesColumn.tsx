import PaddingContainer from "@/components/PaddingContainer"
import { getCateogires } from "@/lib/fetchdatafns"
import { Categories } from "@/lib/types/categoriesType"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

type Props = {
  currentCategory: string
}

const CategoriesColumn = async ({ currentCategory } : Props) => {
  const categories : Categories[] = await getCateogires();

  return (
    <PaddingContainer 
      className='text-white md:w-[25%] max-w-[500px] md:fixed md:h-screen mr-2'
    >
      <h2 className="font-kaushanScript text-primary_yellow text-4xl">Categories</h2>
      <div className="overflow-y-auto max-h-[80vh] mt-5 flex md:flex-col"> 
        {categories.map((category) => (
          <Link 
            href={`/categories/${category.strCategory}`}
            key={category.idCategory}
          >
            <div 
              className={
                twMerge("py-2 px-4 text-2xl mr-2 font-kaushanScript cursor-pointer hover:bg-yellow-700 rounded-xl md:mt-2 ", 
                  currentCategory === category.strCategory.toLowerCase() && 'bg-yellow-700'
                )
              }
            >
              {category.strCategory}
            </div>
          </Link>
        ))}
      </div>
    </PaddingContainer>
  )
}

export default CategoriesColumn