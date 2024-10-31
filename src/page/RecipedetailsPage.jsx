import React from "react";
import UpdateRecipeForm from "../component/UpdateRecipeForm";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";


function RecipedetailsPage({
  recipes,
  deleteRecipe,
  toggleFavorite,
  updateRecipe,
}) {

  const [project, setProject] = useState(null);
  const { recipeId } = useParams();
  const recipe = recipes.find((r) => r.id === recipeId);
  const navigate = useNavigate();
 
  if (!recipe) {
    return <p>Recipe not found!</p>;
  }
  return (
    <section className="recipeList">
      <div className="recipeDetails" key={recipe.id}>
        <h2>
          {recipe.name}
          <br></br>
          <span
            className="favoriteBtn"
            onClick={() => toggleFavorite(recipe.id)}
            style={{
              color: recipe.isFavorite ? "red" : "gray",
            }}
          >
          {recipe.isFavorite ? "❤️" : "🤍"}
          </span>
        </h2>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: "200px", height: "auto" }}
        />
        <br></br>
        {recipe.isCompleted || recipe.calories > 200
          ? " More than 200 calories? ✅"
          : "More than 200 calories? ❌"}
        <p>Calories: {recipe.calories}</p>
        <p>Servings: {recipe.servings} </p>
       
        <div className="btnDeleteEditContainer">
          <button
            className="deleteBtn"
            onClick={() => {
              deleteRecipe(recipe.id);
            }}>
            Delete Recipe
          </button>
        

        <Link to={`/recipe/edit/${recipeId}`}>
          <button className="editBtn" >Edit Recipe</button>
        </Link>
        </div>

        <p>
          <Link
            to="/"
            className="backLink"
            style={{ textDecoration: "none", color: "black" }}>
            Back
          </Link>
        </p>

      </div>
    </section>
  );
}
export default RecipedetailsPage
















