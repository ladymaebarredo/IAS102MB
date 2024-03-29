import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        <div className="forgot">
            <h1>Forgot Password</h1>
            <form className="for"onSubmit={(e)=>handleSubmit(e)}>
                <input className="email"name="email" /><br/><br/>
                <button>Reset</button>
            </form>
        </div>
    )
}
export default ForgotPassword;