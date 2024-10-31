import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateRecipeForm({ recipes, setRecipes }) {


  const [recipeUpdate, setRecipeUpdate] = useState({
    name: "",
    calories: 0,
    servings: 0,
  });

  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    setRecipeUpdate(recipes.find(recipe => recipe.id === recipeId))
  }, [recipeId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, calories, servings } = recipeUpdate
    const updatedRecipe = {
      name: name,
      calories: calories,
      servings: servings,
    };

    const recipieIndex = recipes.findIndex(recipe => recipe.id === recipeId);
    const updated = recipes;
    updated[recipieIndex] = { ...updated[recipieIndex], ...updatedRecipe };
    setRecipes(updated);
    navigate(`/recipe/${recipeId}`);

  };

  const handleChange = (e) => {
    setRecipeUpdate(prev => ({ ...prev, [e.target.name]: e.target.value }))

  }

  return (
    <div className="editRecipe">
      <h3 className="titleEditRecipe">Edit Recipe</h3>
      <form className="formEditRecipe" onSubmit={handleFormSubmit} >

        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter recipe name"
            value={recipeUpdate.name}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <label>
          Calories:
          <input
            type="number"
            name="calories"
            placeholder="Enter calories"
            value={recipeUpdate.calories}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <label>
          Servings:
          <input
            type="number"
            name="servings"
            placeholder="Enter number of servings"
            value={recipeUpdate.servings}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <button className="updateBtn" type="submit">Update</button>

      </form>

    </div>
  );
}

export default UpdateRecipeForm;
