import React ,{useState}from "react";
import "./index.css";
import Login from "./login";

function Signup(){
  const [signupSuccess, setSignupSuccess] = useState(false);
  const handlesignup = () => {
    setSignupSuccess(true);
  };
    return (
        <>
      {!signupSuccess ? (
        <div className={"loginContainer"}>
          <h1 className={"loginHeading"}>SIGN UP</h1>
          <form>
          <label className={"inputLabel"}> USERNAME:</label>
          <input
            type="text"
            placeholder={"USERNAME"}
            className={"usernameInput"}
            required={"required"}
          ></input>
          <label className={"inputLabel"}> PASSWORD:</label>
          <input
            type="password"
            placeholder={"PASSWORD"}
            className={"usernameInput"}
            required
          ></input>
          <label className={"inputLabel"}> E-MAIL ADDRESS:</label>
          <input
            type="email"
            placeholder={"EMAIL ADDRESS"}
            className={"usernameInput"} required/>
          <input
            type="submit"
            value={"SUBMIT"}
            className={"submitBtn"}
            onClick={handlesignup}
          ></input>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </>
      
    );
  }
  export default Signup;