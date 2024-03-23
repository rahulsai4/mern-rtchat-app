import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="home">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default Home;
