import React from "react";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
    return (
        <div className="chat">
            <div className="topbar">name</div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
