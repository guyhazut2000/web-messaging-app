//styles
import "./Register.scss";
// images
import Avatar from "../../images/addAvatar.png";
// components
import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Guy Chat App</span>
        <span className="title">Register</span>
        <form autoComplete="off">
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="id">
            <img src={Avatar} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>
          You have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
