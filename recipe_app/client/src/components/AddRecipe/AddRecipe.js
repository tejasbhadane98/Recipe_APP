import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddRecipe.css"
const AddRecipe = () => {
    const [Recipe_Title, setTitle]=useState("")
    const [Author, setAuthor]=useState("")
    const [Plese_Upload_your_img_Or_paste_Link, setImage]=useState("")
    const [Ingredients, setIngredients]=useState("")
    const [Recipe_Directions, setInstructions]=useState("")
    const navigate=useNavigate()
    function SubmitHandler(e){
        e.preventDefault()
        fetch("/createRecipe",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                Recipe_Title:Recipe_Title.toLowerCase(), Author, Plese_Upload_your_img_Or_paste_Link, Ingredients, Recipe_Directions
            })
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data.message)
            navigate("/home")
        })
    }
  return (
    <div className='AddRecipe'>
        <div className='content'>
        <h2>Create a recipe</h2>
        <p> Share a recipe with the club by completing the form below</p>
        <br></br>
        <label>Recipe Title:</label>
        <input type="text" value={Recipe_Title} onChange={(e)=>setTitle(e.target.value)} />
        <br></br>
        <label>Author: </label>
        <input type="text" value={Author} onChange={(e)=>setAuthor(e.target.value)}/>
        <br></br>
        <label>Please Upload your Image or paste URL link:</label>
        <input type="text" value={Plese_Upload_your_img_Or_paste_Link} onChange={(e)=>setImage(e.target.value)} />
        <br></br>
        <label>Ingredients:</label>
        <textarea className='largeInput' value={Ingredients} onChange={(e)=>setIngredients(e.target.value)} placeholder='Add Ingredients'/>
        <br></br>
        <label>Recipe Directions:</label>
        <textarea className='largeInput' value={Recipe_Directions} onChange={(e)=>setInstructions(e.target.value)} />
        <br></br>
        <button onClick={(e)=>SubmitHandler(e)}>Submit</button>
        </div>
    </div>
  )
}
export default AddRecipe




