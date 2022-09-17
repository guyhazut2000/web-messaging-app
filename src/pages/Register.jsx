import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Guy Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Email" />
          <input type="file" />
        </form>
        <p>
          Don't have an account? <span>Login</span>
        </p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Register;
