//style
import "./Navbar.scss";
// components
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Guy Chat</span>
      <div className="user">
        <img src="" alt="" />
        <span>Guy</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
