// style
import "./Chat.scss";
// images
import Cam from "../../images/cam.png";
import Attach from "../../images/attach.png";
import More from "../../images/more.png";
// components
import React from "react";
import MessageList from "../messagelist/MessageList";
import Input from "../input/Input";

const Chat = () => {
  return (
    <div className="chatContainer ">
      <div className="chatInfo">
        <span>Guy</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Attach} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <MessageList />
      <Input />
    </div>
  );
};

export default Chat;
