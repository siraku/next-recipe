import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Recipes = ({ recipes }) => {
  console.log("the length is " + recipes.length);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">RecipeList</h2>
          <Link href={"/"} className="text-purple-400">
            {" "}
            back to home
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes && recipes.length > 0
            ? recipes.map((recipe) => (
                <Link href={`/recipe-detail/${recipe.id}`} key={recipe.id}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-[1.1] transition-all">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      ></img>
                      <h3 className="text-lg font-bold">{recipe.name}</h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p>{recipe.rating}</p>
                        <p className="text-gray-500">{recipe.cuisine}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
