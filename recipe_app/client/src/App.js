import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from 'react';
import SignIn from './components/SignIn/SignIn';
import Signup from './components/Signup/SignUp';
import Home from './components/Home/Home';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Details from './components/Details/Details';



function App() {
  const [user, setUser]= useState({
   
    jwt:localStorage.getItem("jwt"),
    user:localStorage.getItem("user"),

  });

  const [detail , setDetail] = useState({})
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<SignIn setUser={setUser}/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/home' element={<Home detail={detail} setDetail={setDetail}/>} />
        <Route path='/add' element={<AddRecipe/>}/>
        <Route path='/details' element={<Details detail={detail}/>}/>


      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
