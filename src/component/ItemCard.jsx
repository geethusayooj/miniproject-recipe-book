import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ recipe, deleteRecipe }) {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="recipeContainer" key={recipe.id}>
        <div>{recipe.name}</div>
        <br></br>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{
            width: "200px",
            height: "auto",
            margin: "10px",
          }}
        />
      </div>
    </Link>
  );
}

export default ItemCard;
