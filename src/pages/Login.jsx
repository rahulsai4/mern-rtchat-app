import React from "react";

const Login = () => {
    return (
        <div class="formContainer">
            <form className="myForm">
                <label className="logo">chat</label>
                <label>login</label>
                <input type="text" placeholder="enter username"></input>
                <input type="password" placeholder="enter password"></input>
                <button className="formButton">sign-in</button>
                <span>you don't have an account? sign-in</span>
            </form>
        </div>
    );
};

export default Login;
