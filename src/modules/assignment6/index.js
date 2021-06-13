import React, { Component, useState } from "react";
import "./index.css";
import image1 from "./image1.jpeg";
import Login from "./login";
import Signup from "./signup";

function Assignment6() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginChange = () => {
    setLoginOpen(true);
  };
  const handleSignupChange = () => {
    setSignupOpen(true);
  };
  return (
    <div>
      {!signupOpen && !loginOpen && (
        <div className={"mainContainer"}>
          <button type={"button"} className={"loginBtn"}  onClick={handleLoginChange}>
            LOGIN
          </button>
          <button type={"button"} className={"signupBtn"} onClick={handleSignupChange}>
            SIGN UP
          </button>
        </div>
      )}
      {loginOpen && <Login />}
        {signupOpen && <Signup />}
    </div>
  );
}

export default Assignment6;
