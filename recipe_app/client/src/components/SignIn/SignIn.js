import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import "../SignIn/Signin.css"

export default function SignIn(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SignInHandler = (e)=>{
        e.preventDefault()
        console.log(email, password);

        fetch("/signin",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert(data.message)
                // navigate("/Dashboard")
            }
        })
    }
    return(
        <div className="container">
            <div className="main">
                <section className="SignIN">
                    <h1>SIGN IN</h1>
                </section>
                
                <div className="email">
                <h2>Email Address</h2>
                    <input type="email" id="em" placeholder="Enter Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>

                <div className="pwd">
                <h2>Password</h2>
                    <input type="Password" id="pw" placeholder="Enter Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </div>

                <div className="Remember">
                    <input type="checkbox" id="chk" /> <h3>Remember Me</h3>
                </div>

                <div className="btn">
                    <button id="bt" onClick={(e)=>SignInHandler(e)}>Submit</button>

                </div>
                <div>
                    <h6 className="frg">Forgot Password?</h6>
                </div>

                <div className="forgot">
                    <Link to="/SignUp">Sign Up</Link>

                </div>



            </div>


        </div>
    )
}