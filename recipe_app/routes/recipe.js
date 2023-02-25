const express = require("express");
const {isAuthenticated} = require("../auth")
let  Recipe = require("../models/Recipe")
let router = express.Router();
// const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/createRecipe", isAuthenticated, async(req,res)=>{
    try{
        // console.log("Hiii");
        let recipe = await Recipe.create({...req.body})
        console.log(recipe);
        res.json({
            message:"Recipe Added Succesfully"
        })
    }
    catch(error){
        console.log("Error is here");
        res.json({
            error: error.message
        })
    }
})

router.get("/getAllRecipe",  async(req,res)=>{
    try{
        let data = await Recipe.find()
        console.log(data);
        res.json({
            data
        })
    }
    catch(error){
        // console.log("Error is here");
        res.json({
            error: error.message
        })
    }
})

router.get("/recipe/:_id",  async(req,res)=>{
    try{
        let data = await Recipe.findOne({_id:req.params._id})
        console.log(data);
        res.json({
            data
        })
    }
    catch(error){
        // console.log("Error is here");
        res.json({
            error: error.message
        })
    }
})

router.get("/search/:title",  async(req,res)=>{
    try{
        let pattern = new RegExp("^"+req.params.title)
        let data = await Recipe.find({title:{$regex:pattern}})
        res.json({
            data
        })
    }
    catch(error){
        // console.log("Error is here");
        res.json({
            error: error.message
        })
    }
})


module.exports = router