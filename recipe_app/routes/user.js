const express = require("express");
let  User = require("../models/User")
let router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/signup", async(req,res)=>{
    try{
        console.log(req.body);
        let {email, password , repeat_password} = req.body
        let user = await User.findOne({email:email})
        if(user){
            console.log(user);
            return res.json({
                error:"User Already Exists"
            })
        }
        if(password!==repeat_password){
            return res.json({
                error: "Password and Repeat Password Does not match"
            })
        }

        user = await User.create({email, password, repeat_password})
        res.json({
            message:"Account Created Succesfully"
        })

       
    }
    catch(error){
        console.log("Error in signup", error);
        res.json({
            error:error.message
        })
    }
})


router.post("/signin", async(req,res)=>{
    try{
        // console.log(req.body);
        let {email, password } = req.body
        let user = await User.findOne({email:email})
        if(!user){
            console.log(user);
            return res.json({
                error:"User Doest Not Exists"
            })
        }
        if(user.password!==password){
            return res.json({
                error: "Incorrect  Password"
            })
        }

       const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
        res.json({
            user,token,
            message:"Logged In Succesfully"
            
        })

       
    }
    catch(error){
        // console.log("Error in signup", error);
        res.json({
            error:error.message
        })
    }
})

module.exports = router