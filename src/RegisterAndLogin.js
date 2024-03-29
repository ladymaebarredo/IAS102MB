import React, { useState, useRef } from "react";
import { database } from "./FirebaseConfig";
import ReCAPTCHA from "react-google-recaptcha";
import "./RegisterAndLogin.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [accountCreated, setAccountCreated] = useState(false);
  const formRef = useRef(null);
  const captchaRef = useRef(null); // Reference for ReCAPTCHA component
  const history = useNavigate();

  const setLoginMode = (isLogin) => {
    setLogin(isLogin);
    setCaptchaValue(null); // Reset captchaValue when switching modes
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!captchaValue && type === "signup") {
      alert("Please complete the CAPTCHA.");
      return;
    }

    if (type === "signup") {
      const confirmPassword = e.target.confirmPassword.value;
      if (password !== confirmPassword) {
        alert("Password and confirm password do not match.");
        return;
      }

      createUserWithEmailAndPassword(database, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created successfully:", user);
          setAccountCreated(true);
          resetForm();
          resetCaptcha(); // Reset CAPTCHA upon successful account creation
          setTimeout(() => {
            setAccountCreated(false); // Hide notification after 2 seconds
          }, 3000);
        })
        .catch((err) => {
          alert(err.code);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          resetCaptcha(); // Reset CAPTCHA upon successful login
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const resetForm = () => {
    formRef.current.reset();
    setCaptchaValue(null);
  };

  const resetCaptcha = () => {
    captchaRef.current.reset(); // Reset ReCAPTCHA
  };

  const handleReset = () => {
    history("/reset");
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="App">
      <form ref={formRef} onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        <div className="row">
          <h1>{login ? "Login" : "Create"}</h1>
          <div>
            <button
              className={login === false ? "activeColor pointer" : "pointer"}
              type="button"
              onClick={() => setLoginMode(false)}
            >
              Create
            </button>
            <button
              className={login === true ? "activeColor pointer" : "pointer"}
              type="button"
              onClick={() => setLoginMode(true)}
            >
              Login
            </button>
          </div>
        </div>
        <br />
        <br />

        <input className="em" name="email" placeholder="Email" />
        <br />
        <input name="password" type="password" placeholder="Password" />
        <br />

        {login === false && (
          <>
            <input name="confirmPassword" type="password" placeholder="Confirm Password" />
            <br />
          </>
        )}

        <div className="forgotPassword">
          <p onClick={handleReset}>Forgot Password?</p>
        </div>
        <br />
        <ReCAPTCHA
          ref={captchaRef}
          sitekey="6LfhvJspAAAAAPUNrVEjwE6SAkxqAGpTaKlqHqg_"
          onChange={handleCaptchaChange}
        />
        <br />
        <button className="submit" type="submit">
          {login ? "Login" : "SignUp"}
        </button>
      </form>

      {accountCreated && (
        <div className="notification">
          <p>Account created successfully!</p>
        </div>
      )}
    </div>
  );
}

export default RegisterAndLogin;
