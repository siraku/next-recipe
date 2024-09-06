import Link from "next/link";
import React from "react";

const getRecipeDetail = async (id) => {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const result = await apiResponse.json();
    // console.log(result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const Detail = async ({ params }) => {
  const recepi = await getRecipeDetail(params.id);
  return (
    <div>
      <Link
        className="font-bold text-purple-500 pt-3 text-[20px] flex justify-center"
        href="/recipe-list"
      >
        back to recipe list
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2 hover:scale-105">
            <img
              src={recepi.image}
              alt={recepi.name}
              className="h-full w-full object-cover object-top rounded-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              Recipe Name: {recepi.name}
            </h2>
            <p className="text-xl text-gray-800 mt-5"> {recepi.cuisine}</p>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">ingredients</h3>
              <ul>
                {recepi.ingredients.map((ingredient) => (
                  <li
                    className="space-y-3 list-disc mt-4 text-sm text-gray-500"
                    key={ingredient}
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
