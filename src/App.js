import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import ListOfItems from "./component/ListOfItems";
import ItemCard from "./component/ItemCard";
import AboutPage from "./page/AboutPage";
import { useLocation } from "react-router-dom";
import ErrorPage from "./page/ErrorPage";
import data from "./recipe-dataset.json";
import RecipedetailsPage from "./page/RecipedetailsPage";
import UpdateRecipeForm from "./component/UpdateRecipeForm";
import AddRecipe from "./component/AddRecipe";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";


function App() {
  const location = useLocation();
  const [recipes, setRecipes] = useState(data);
  const deleteRecipe = (recipeId) => {
    const newArray = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(newArray);
  };

  const toggleFavorite = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );
  };

  const createRecipe = (recipeDetails) => {
    const newRecipe = {
      ...recipeDetails,
      id: uuidv4(),
    };
    console.log(newRecipe.id);
    const newArray = [newRecipe, ...recipes];
    setRecipes(newArray);
  };

  return (
    <div className="maincontainer">
      <Navbar />
      <Sidebar />

      {location.pathname === "/" && (
        <AddRecipe callbackToCreate={createRecipe} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <ListOfItems recipes={recipes} deleteRecipe={deleteRecipe} />
          }
        />
        <Route
          path="/recipe/:recipeId"
          element={
            <RecipedetailsPage
              recipes={recipes}
              deleteRecipe={deleteRecipe}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/recipe/edit/:recipeId" element={<UpdateRecipeForm recipes={recipes} setRecipes={setRecipes}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
