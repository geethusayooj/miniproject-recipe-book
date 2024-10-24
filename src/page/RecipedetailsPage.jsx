import React from "react";

import { Link, useParams } from "react-router-dom";

function RecipedetailsPage({ recipes, deleteRecipe }) {
  const { recipeId } = useParams();
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <section className="recipeList">
      <div key={recipe.id}>
        <h2>{recipe.name}</h2>
        {recipe.isCompleted || recipe.calories > 200 ? " ✅" : " ❌"}
        <p>Calories: {recipe.calories}</p>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: "200px", height: "auto" }}
        />
        <p>Servings: {recipe.servings}</p>
        <p>
          <button onClick={() => {deleteRecipe(recipe.id)}}>
            Delete this Recipe
          </button>
          <p>
            <Link to="/" className="btn btn-primary">
              Back
            </Link>
          </p>
        </p>
      </div>
    </section>
  );
}

export default RecipedetailsPage;
