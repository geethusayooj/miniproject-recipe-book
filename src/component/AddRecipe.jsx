import { useState } from "react";


function AddRecipe(props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const RecipedetailsPage = {
            name: name,
            calories: calories,
            image: image,
            servings: servings,
        }

        props.callbackToCreate(RecipedetailsPage);

        setName("");
        setCalories("");
        setImage("");
        setServings("");
    }

    return (
        <section className="createRecipe">
            <h2 className="titleCreateRecipe">Create your Recipe</h2>
            <form className="formCreateRecipe" onSubmit={handleSubmit}>


                <label>Recipe:
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter recipe name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>

                <br></br>

                <label>Calories:
                    <input
                        type="text"
                        name="calories"
                        value={calories}
                        placeholder="Enter calories"
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                </label>

                <br></br>

                <label>Image URL:
                    <input
                        type="url"
                        name="image"
                        placeholder="https://i.imgur.com/eTmWoAN.png"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </label>

                <br></br>

                <label>Servings:
                    <input
                        type="text"
                        name="servings"
                        placeholder="Enter number of servings"
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }}
                    />
                </label>

                <br></br>

                <button className="createBtn" >Create</button>
            </form>
        </section>

    )
}
export default AddRecipe;










