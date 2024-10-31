import { useState } from "react";
import data from "../recipe-dataset.json";
import ItemCard from "./ItemCard";

function ListOfItems({ recipes, deleteRecipe }) {
  return (
    <div className="recipeListContainer">
      <h1 className="recipeListTitle">Recipe List</h1>

      <br></br>

      <section className="recipeList">
        <div className="recipes">
          {recipes.map((recipe) => (
            <ItemCard
              key={recipe.id}
              recipe={recipe}
              name={recipe.name}
              deleteRecipe={deleteRecipe}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ListOfItems;
