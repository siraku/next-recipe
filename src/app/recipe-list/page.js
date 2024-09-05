import Recipes from "@/components/recipes";

const fetchRecipes = async () => {
  const apiResponse = await fetch("https://dummyjson.com/recipes");
  const result = await apiResponse.json();
  //   console.log(result);
  return result.recipes;
};

const RecipeList = async () => {
  const recipes = await fetchRecipes();
  // console.log(recipes);
  console.log(recipes.length);
  return <Recipes recipes={recipes} />;
};

export default RecipeList;
