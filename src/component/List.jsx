import React from "react";
import ItemCard from "./ItemCard";

function List({ recipes, deleteRecipe }) {
  return (
    <section className="recipeList">
      {recipes.map((recipe) => (
        <ItemCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
      ))}
    </section>
  );
}
export default List;
