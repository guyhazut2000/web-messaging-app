//styles
import "./Login.scss";
// components
import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Guy Chat App</span>
        <span className="title">Login</span>
        <form autoComplete="off">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>
          Don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
