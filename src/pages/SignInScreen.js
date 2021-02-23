import React from "react";
import "./SignInScreen.css";
import { Link } from "react-router-dom";

function SignInScreen() {
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>SignIn</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/home">
          <button className="btn">SignIn</button>
        </Link>
      </form>
    </div>
  );
}

export default SignInScreen;
