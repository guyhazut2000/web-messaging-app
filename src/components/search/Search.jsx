// style
import "./Search.scss";
//images
import User from "../../images/addAvatar.png";
// components
import React from "react";

const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Guy</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
