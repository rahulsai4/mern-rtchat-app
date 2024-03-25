import React from "react";
import Userchat from "./Userchat";
import Search from "./Search";
import Profile from "./Profile";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <label>rtchat</label>
            <Search />
            <Userchat />
            <Userchat />
            <Userchat />
            <Profile />
        </div>
    );
};

export default Sidebar;
