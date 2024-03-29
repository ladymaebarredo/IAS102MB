import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, db }from "../../firebase";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log in your account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email} // Fix: Use value instead of "email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password} // Fix: Use value instead of "password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>} {/* Display error message if exists */}
    </div>
  );
};

export default SignIn;
