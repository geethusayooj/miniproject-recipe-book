import "./App.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import ListOfItems from "./component/ListOfItems";
import ItemCard from "./component/ItemCard";
import AboutPage from "./page/AboutPage";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./page/HomePage";
import ErrorPage from "./page/ErrorPage";
import data from './recipe-dataset.json';
import RecipedetailsPage from "./page/RecipedetailsPage";


import { useState } from "react";

function App() {

  const [recipes, setRecipes] = useState(data);

  const deleteRecipe = (recipeId) => {
    const newArray = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(newArray);
  };
 

  return (
    <div className="maincontainer">
      <Navbar />
      <Sidebar />
     

      <Routes>
        <Route path="/" element={<ListOfItems recipes={recipes} deleteRecipe={deleteRecipe} />} />
       
        
        <Route path="/recipe/:recipeId" element={<RecipedetailsPage recipes={recipes} deleteRecipe={deleteRecipe} />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App
