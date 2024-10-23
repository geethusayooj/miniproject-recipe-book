import React from "react";
import { useState } from "react";
import data from "../recipe-dataset.json";
import List from "./List";

function ListOfItems() {
  const [recipes, setRecipes] = useState(data);
  const deleteRecipe = (recipeId) => {
    const newArray = recipes.filter((recipe) => recipe.id !== recipeId);

    setRecipes(newArray);
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <List recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default ListOfItems;
