const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    Recipe_Title:{
        type:String, required:true
    },
    Author:{type:String, required:true},
    Plese_Upload_your_img_Or_paste_Link:{
        type:String
    },
    Ingredients:{
        type:String
    },
    Recipe_Directions:{
        type:String
    }


})

const RecipeModel = mongoose.model("Recipe", RecipeSchema);
module.exports = RecipeModel;