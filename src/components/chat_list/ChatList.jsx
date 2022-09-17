// style
import "./ChatList.scss";
//images
import User from "../../images/addAvatar.png";
// components
import React from "react";

const ChatList = () => {
  return (
    <div className="chatList">
      <div className="userChat">
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Guy</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
