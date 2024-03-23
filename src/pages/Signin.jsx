import React from "react";

const Signin = () => {
    return (
        <div className="formContainer">
            <form className="myForm">
                <label className="logo">chat</label>
                <label>sign-in</label>
                <input type="text" placeholder="enter name"></input>
                <input type="email" placeholder="enter email"></input>
                <input type="password" placeholder="enter password"></input>
                <input
                    type="password"
                    placeholder="enter password again"
                ></input>
                <button className="formButton">sign-in</button>
                <span>you do have an account? Login</span>
            </form>
        </div>
    );
};

export default Signin;
