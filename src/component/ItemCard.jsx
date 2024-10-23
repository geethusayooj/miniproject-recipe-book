import React from "react";
import { useState } from "react";
import data from "../recipe-dataset.json";
import ListOfItems from "./ListOfItems";

function ItemCard({ recipe, deleteRecipe }) {
  return (
    <section className="recipeList">
      <div key={recipe.id}>
        {recipe.name}
        {( recipe.isCompleted || recipe.calories > 200) ? " ✅" : " ❌"}
        <p> {recipe.calories}</p>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: "200px", height: "auto" }}
        />
        <p> {recipe.servings}</p>
        <p>
          <button
            onClick={() => {
              deleteRecipe(recipe.id);
            }}
          >
            Delete this Recipe
          </button>
        </p>
      </div>
    </section>
  );
}

export default ItemCard;
