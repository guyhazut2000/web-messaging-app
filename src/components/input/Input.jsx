// style
import "./Input.scss";
// images
import Attach from "../../images/attach.png";
import Img from "../../images/img.png";
// components
import React from "react";

const Input = () => {
  return (
    <div className="inputContainer">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
