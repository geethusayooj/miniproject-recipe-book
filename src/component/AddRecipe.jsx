import { useState } from "react";


function AddRecipe(props){
    
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const RecipedetailsPage = {
            name: name,
            calories: parseInt(calories, 10),
            image: image,
            servings: parseInt(servings, 10),
          }

          props.callbackToCreate(RecipedetailsPage);

          setName("");
          setCalories("");
          setImage("");
          setServings("");
        }

return(
<section className="createRecipe">
<h2>Create your Recipe</h2>
<form onSubmit={handleSubmit}>

              
                <label>Recipe:
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Recipe name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>

                
                <label>Calories:
                    <input
                        type="number"
                        name="calories"
                        value={calories}
                        placeholder="Enter Calories detail"
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                </label>


               
                <label>Image URL:
                    <input
                        type="url"
                        name="image"
                        placeholder="https://i.imgur.com/eTmWoAN.png"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </label>


                
                <label>Servings:
                    <input
                        type="number"
                        name="servings"
                        placeholder="Enter serving"
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
</section>
  
)
}
export default AddRecipe;










