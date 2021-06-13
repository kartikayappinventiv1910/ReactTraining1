import "./index.css";
import MoviesPage from "./moviesPage";
import { useState } from "react";
import image1 from "./image1.jpeg";
// import ReusableBox from "../../components/reusableBox";

function Login() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handlelogin = () => {
    setLoginSuccess(true);
  };
  return (
    <>
      {!loginSuccess ? (
        <div className={"loginContainer"}>
          <h1 className={"loginHeading"}>LOGIN</h1>
          <label className={"inputLabel"}> USERNAME:</label>
          <input
            type="text"
            placeholder={"USERNAME"}
            className={"usernameInput"}
            required
          ></input>
          <label className={"inputLabel"}> PASSWORD:</label>
          <input
            type="password"
            placeholder={"PASSWORD"}
            className={"usernameInput"}
            required
          ></input>
          <input
            type="submit"
            value={"SUBMIT"}
            className={"submitBtn"}
            onClick={handlelogin}
          ></input>
        </div>
      ) : (
        <MoviesPage />
      )}
    </>
  );
}
export default Login;
