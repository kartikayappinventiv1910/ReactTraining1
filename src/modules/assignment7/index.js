import React, { useEffect, useState } from "react";
import "./index.css";
// import Autocomplete from '@material-ui/lab/Autocomplete';

function Assignment7() {
  const [apiData,setapiData]=useState([]);
  const [inputstate,setinputstate]=useState("");
  console.log(inputstate)

     
  const jsonData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const actualData = await res.json();
      console.log(actualData);
      localStorage.setItem("userdata",JSON.stringify(actualData))
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    jsonData()
  }, []);
  return(
    <div>
    <div className={"headingContainer"}>
        <h2 className={"keysHeading"}>{"KEYS OF DATA"}</h2>
        <p className={"keys"}>{"firstobj"}</p>
        <p className={"keys"}>{"secondobj"}</p>
        <p className={"keys"}>{"firstarr"}</p>
        <p className={"keys"}>{"secondarr"}</p>
        <p className={"keys"}>{"username"}</p>
        <p className={"keys"}>{"email"}</p>
    </div>
    <form>
      <input type="text" value={inputstate}  placeholder="Enter the Search Key" className={"inputField"}
      onChange={(E)=>setinputstate(E.target.value)}/>
      <input type="submit" value="SEARCH"  className={"searchbtn"}/>
    </form>
  </div>
  );
}


export default Assignment7;