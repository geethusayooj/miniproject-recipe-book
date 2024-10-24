import { useState } from "react";
import data from "../recipe-dataset.json";
import ItemCard from "./ItemCard";

function ListOfItems({ recipes, deleteRecipe }) {

  return (
    <div>
      <h1>Recipe List</h1>

      
      <section className="recipeList">
      {recipes.map((recipe) => (
        <ItemCard
          key={recipe.id}
          recipe={recipe}
          name={recipe.name}
          deleteRecipe={deleteRecipe}
        />
      ))}
    </section>
    </div>
  );
}

export default ListOfItems;
