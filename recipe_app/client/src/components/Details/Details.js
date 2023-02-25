import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Details/Details.css"
const Details = ({ detail }) => {
    const [serachResults, setSearchResults] = useState([])
    const [search, setSearch] = useState("")
    const [showInstruction, setShowInstruction] = useState(true)
    const [showIngredients, setShowIngredients] = useState(false)



    function searchHandler(e) {

        fetch(`/search/${e.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.recipes, e, serachResults.length)
                setSearchResults(data.recipes)
            })
    }
    
    const navigate=useNavigate()
    let ingredients = detail.ingredients.split(",")




   
    return (
        <div>
            <div className='home'>
                <div className='logo' onClick={()=>{navigate("/home")}}>
                    <i class="fa-solid fa-utensils"></i>  Recipe App
                </div>
                <input type="text" onChange={(e) => { setSearch(e.target.value); searchHandler(e.target.value) }} placeholder='Search recipe  here' className='search' />
                <br />
                <div className='addnew'>
                    <Link to="/add">
                        <i class="fa-solid fa-pizza-slice"></i>
                        <br></br>
                        <p>new</p>
                    </Link>
                </div>
                <div className='all'>
                    {
                        search.length !== 0 &&
                        serachResults.map((recipe) => {
                            return (
                                <div className='each'>
                                    <img src={recipe.Plese_Upload_your_img_Or_paste_Link} />
                                    <span className='info'>
                                        Recipe: {recipe.Recipe_Title}
                                        <br></br>
                                        Posted By: {recipe.Author}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
           { search.length===0 && <div className='detail'>
                <div className='col1'>
                    <h2>{detail.Recipe_Title}</h2>
                    <img src={detail.Plese_Upload_your_img_Or_paste_Link} />
                </div>
                <div className='col2'>
                    <button onClick={() => { setShowInstruction(true); setShowIngredients(false) }}>Instructions</button>
                    <br></br>
                    <button onClick={() => { setShowInstruction(false); setShowIngredients(true) }}>Ingredients</button>
                    <br></br>
                    {
                        showInstruction ?
                            <>
                                {detail.Recipe_Directions}
                            </>
                            :
                            <ul>
                                {ingredients.map((Ingredient) => {
                                    return <>
                                        <li>{Ingredient}</li>
                                    </>
                                })
                                }
                            </ul>
                    }
                </div>
            </div>}
        </div>
    )
}
export default Details