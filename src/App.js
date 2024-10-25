import "./App.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import ListOfItems from "./component/ListOfItems";
import ItemCard from "./component/ItemCard";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import ErrorPage from "./page/ErrorPage";
import data from './recipe-dataset.json';
import RecipedetailsPage from "./page/RecipedetailsPage";
import AddRecipe from "./component/AddRecipe";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState } from "react";


function App() {

  const [recipes, setRecipes] = useState(data);

  const deleteRecipe = (recipeId) => {
    const newArray = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(newArray);
  };

  
  const createRecipe = (recipeDetails) => {
  const recipeIds = recipes.map(recipe => recipe.id);
  const maxId = Math.max(...recipeIds);
  const nextId = maxId + 1;

  const newRecipe = {
    ...recipeDetails,
    id: nextId
  }
  console.log(newRecipe.id);
    const newArray = ([newRecipe, ...recipes]);
    setRecipes(newArray);
  }
 

  return (
    <div className="maincontainer">
      <Navbar />
      <Sidebar />   

      <AddRecipe callbackToCreate={createRecipe} />  

      <Routes>
        <Route path="/" element={<ListOfItems recipes={recipes} deleteRecipe={deleteRecipe} />} />
        <Route path="/recipe/:recipeId" element={<RecipedetailsPage recipes={recipes} deleteRecipe={deleteRecipe}/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App



