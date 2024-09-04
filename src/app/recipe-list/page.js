import Recipes from "@/components/recipe-list";

const fetchRecipes = async () => {
  const apiResponse = await fetch("https://dummyjson.com/recipes");
  const result = await apiResponse.json();
  //   console.log(result);
  return result.recipes;
};

const RecipeList = async () => {
  const recipes = await fetchRecipes();

  return <Recipes />;
};

export default RecipeList;
