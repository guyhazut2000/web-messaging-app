// styles
import "./Home.scss";
// components
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Chat from "../../components/chat/Chat";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <Sidebar className="sidebar" />
        <Chat className="chat" />
      </div>
    </div>
  );
};

export default Home;
