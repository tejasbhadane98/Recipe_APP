const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const app = express();

if(process.env.NODE_ENV !=="production"){
    require("dotenv").config({path:"config.env"})
}

app.use(express.json());

mongoose.connect(
    process.env.MONGO_URI
).then(()=>console.log("Connected to the Database"))

const user = require("./routes/user")
app.use(user)

const recipe = require("./routes/recipe")
app.use(recipe)

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server Running at the port 5000");
});
