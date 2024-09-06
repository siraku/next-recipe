import React from "react";

const getRecipeDetail= async (id)=>{
  try {
     const apiResponse= await fetch(`https://dummyjson.com/recipes/${id}`)
     const result= await apiResponse.json()
    //  console.log(result)
     return result
  } catch (error) {
    throw new Error(error)
  }
}

const Detail = async ({params}) => {
  const recepi= await getRecipeDetail(params.id)
  return (<div> <div className="flex"> <img src={recepi.image} alt={recepi.name} className="h-full w-full object-cover object-top"/> <div><div>Recipe Name: {recepi.name}</div><div>cuisine: {recepi.cuisine}</div> <ul></ul> </div></div></div>)
};

export default Detail;
