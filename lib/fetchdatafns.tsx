const BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

export async function getCateogires(){
  try{
    const response = await fetch(`${BASE_URL}/categories.php`)

    const data = await response.json();

    return data.categories
  }catch(err){
    if(err instanceof Error){
      throw new Error(err.message)
    }
  }
}

export async function getRecipesByCategory(category: string){
  try{
    const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);

    const data = await response.json();
    
    return data.meals;
  }catch(err){
    if(err instanceof Error){
      throw new Error(err.message)
    }
  }
}

export async function getRecipesBySearch(searchInput: string){
  try{
    const response = await fetch(`${BASE_URL}/search.php?s=${searchInput}`);

    const data = await response.json();

    return data.meals
  }catch(err){
    if(err instanceof Error){
      throw new Error(err.message)
    }
  }
}