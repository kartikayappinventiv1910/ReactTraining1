import React from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import Product from "./Product";
import './index.css';

function Login() {
  const History = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    window.localStorage.setItem("token", "true");
    History.push("/Product");
  }
//   const handleSubmit = () => {
//     //   console.log(History);
//     History.push("/Product");
//   };
  return (
    <div className={"loginContainer"}>
      <h2>Login Form</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor={"username"} className={"inputlabel"}>
          {"UserName:"}
        </label>
        <input
          type="text"
          id={"username"}
          name={"username"}
          className={"inputfield"}
          placeholder={"Enter user name"}
          required
        />

        <label htmlFor={"email"} className={"inputlabel"}>
          {"email:"}
        </label>
        <input
          type="email"
          id={"email"}
          name={"email"}
          className={"inputfield"}
          placeholder={"Enter E-Mail"}
          required
        />
        <label htmlFor={"password"} className={"inputlabel"}>
          {"password:"}
        </label>
        <input
          type="password"
          id={"password"}
          name={"password"}
          className={"inputfield"}
          placeholder={"Enter Password"}
          required
        />
        <button className={"submitButton"}>submit</button>
      </form>
    </div>
  );
}

export default Login;
