import React from "react";
import Userchat from "./Userchat";
import Search from "./Search";
import Profile from "./Profile";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <label>chat</label>
            <Search />
            <Userchat />
            <Profile />
        </div>
    );
};

export default Sidebar;
