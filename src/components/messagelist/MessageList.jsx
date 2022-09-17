// style
import "./MessageList.scss";
// componenets
import React from "react";
import Message from "../message/Message";

const MessageList = () => {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessageList;
