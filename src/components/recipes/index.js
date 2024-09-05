import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Recipes = ({ recipes }) => {
  return (
    <div>
      {" "}
      <h1>RecipeList aaa</h1>
      {recipes && recipes.length > 0
        ? recipes.map((recipe) => {
            <Card>
              <CardContent>
                {" "}
                <Link href={"/"}> hello recipe </Link>{" "}
              </CardContent>
            </Card>;
          })
        : null}
    </div>
  );
};

export default Recipes;
