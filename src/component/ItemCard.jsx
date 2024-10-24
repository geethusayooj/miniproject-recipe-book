import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ recipe, deleteRecipe}) {
  return (
    <Link to={`/recipe/${recipe.id}`}><section className="recipeList">
    <div key={recipe.id}>
      {recipe.name}

      {/* {( recipe.isCompleted || recipe.calories > 200) ? " ✅" : " ❌"} */}
      {/* <p> {recipe.calories}</p> */}
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "200px", height: "auto" }}
      />
      {/* <p> {recipe.servings}</p>
      <p>
        <button
          onClick={() => {
            deleteRecipe(recipe.id);
          }}
        >
          Delete this Recipe
        </button>

      </p> */}
     
     
      
    </div>
  </section></Link>
  );
}

export default ItemCard;
