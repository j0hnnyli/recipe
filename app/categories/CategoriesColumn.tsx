import PaddingContainer from "@/components/PaddingContainer"
import { getCateogires } from "@/lib/fetchdatafns"
import { Categories } from "@/lib/types/categoriesType"
import CategoriesColumnLink from "./CategoriesColumnLink"

const CategoriesColumn = async () => {
  const categories : Categories[] = await getCateogires();

  return (
    <PaddingContainer 
      className='text-white md:w-[25%] max-w-[500px] md:fixed md:h-screen mr-2'
    >
      <h2 className="font-kaushanScript text-primary_yellow text-4xl">Categories</h2>
      <div className="overflow-auto max-h-[80vh] mt-5 flex md:flex-col"> 
        {categories.map((category) => (
          <CategoriesColumnLink
            key={category.idCategory}
            href={`/categories/${category.strCategory}?input=''`}
            title={category.strCategory}
          />
        ))}
      </div>
    </PaddingContainer>
  )
}

export default CategoriesColumn