import { SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";
import { getCateogires } from "@/lib/fetchdatafns";
import { Categories } from "@/lib/types/categoriesType";

const CategoriesSelectOptions = async () => {
  const categories: Categories[] = await getCateogires();

  return (
    <>
      <SelectTrigger className='bg-black text-primary_yellow font-kaushanScript text-xl tracking-widest md:w-[25%] max-w-[500px]'>
        <h2>Categories</h2>
      </SelectTrigger>
      <SelectContent className="bg-black text-primary_yellow">
        {categories.map((category) => (
          <SelectItem 
            key={category.idCategory} 
            value={category.strCategory}
            className="hover:bg-yellow-700 font-kaushanScript text-xl"
          >
            {category.strCategory}
          </SelectItem>
        ))}
      </SelectContent>
    </>
  );
};

export default CategoriesSelectOptions;
