import popularRecipes from '@/lib/data/popularRecipes.json'
import Card from '../Card'
import Logo from '../Logo'

const PopularRecipesSection = () => {

  return (
    <div className="relative border-t-4 border-primary_yellow mb-10">
      <div 
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-l-4 border-r-4 border-yellow-400 rounded-full flex flex-col items-center justify-center text-white text-center font-kaushanScript z-40 bg-black"
      >
        <Logo width="50" height="50" />
        <h2 className="text-white text-xl mt-2">Popular </h2>
      </div>


      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 my-32 px-4'>
        {popularRecipes.map((recipe) => (
          <Card 
            key={recipe.idMeal}
            id={recipe.idMeal}
            img={recipe.strMealThumb}
            title={recipe.strMeal}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularRecipesSection