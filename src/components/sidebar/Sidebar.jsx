// style
import "./Sidebar.scss";
// components
import React from "react";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import ChatList from "../chat_list/ChatList";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <Navbar />
      <Search />
      <ChatList />
    </div>
  );
};

export default Sidebar;
