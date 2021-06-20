import React, { useEffect, useState } from "react";
import "./index.css";
import Data from "./data";
import EditBikeScreen from "./editbikescreen";
// import Autocomplete from '@material-ui/lab/Autocomplete';

const Heading = (props) => {
    return <h1 className={props.styleClass}>{props.headingText}</h1>;
  };

function Assignment7(){
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [key, setKey] = useState("");
  const [model, setModel] = useState("");

  const [mainData,setMainData]=useState(Data);

  if (localStorage.getItem("bikeData") === null)
    localStorage.setItem("bikeData", JSON.stringify(mainData.bikes));

// if (JSON.parse(window.localStorage.getItem("bikeData")) === null) {
//     window.localStorage.setItem("bikeData", JSON.stringify(Data.bikes));
  


const bikeData =JSON.parse( localStorage.getItem("bikeData"));
console.log(bikeData);
// const bikeData =localStorage.getItem("bikeData");

  const handleKey = () => {
    const value = document.getElementById("keySelect").value;
    setKey(value);
  };

  const handleModel = () => {
    const value = document.getElementById("modelSelect").value;
    setModel(value);
  };

  const checkHome = () => {
    const selectKey = document.getElementById("keySelect").value;
    const selectModel =
      selectKey !== "" && selectKey !== "dealer" && selectKey !== "customer"
        ? document.getElementById("modelSelect").value
        : "";

    if (selectKey === "") alert("Please select a key from the list");
    else if (selectKey === "bikes" && selectModel === "")
      alert("Please select a vehicle model");
    else setIsHomeOpen(false);
  };

  return (
    <>
    {isHomeOpen ?(
      <div className={"main"}>
      <form>
        <label htmlFor={"keySelect"}>
          {"Select a key from the given list"}
        </label>
        <select
          id={"keySelect"}
          name={"keySelect"}
          placeholder={"Select Key"}
          onChange={handleKey}
        >
          <option value="">{"Select"}</option>
          <option value="bikes">{"Bikes"}</option>
        </select>
        {(key === "bikes") && (
          <>
            <label htmlFor={"modelSelect"}>
              {"Select a model from the given list"}
            </label>
            <select
              id={"modelSelect"}
              name={"modelSelect"}
              placeholder={"Select Model"}
              onChange={handleModel}
            >
              <option value="">{"Select"}</option>
              {/* {key === "bikes"
                ? bikeData.map((curr, ind) => {
                    return (
                      <option key={ind} value={curr.model}>
                        {curr.model}
                      </option>
                    );
                  })
                : null} */}
            </select>
          </>
        )}
        <button onClick={checkHome} className={"submit"} type={"button"}>
          {"Submit"}
        </button>
      </form>
      </div>
      ):<Heading headingText={"Welcome To Edit Screen"} />}
      {key === "bikes" && <EditBikeScreen model={model} />}
    </>
  );
}

//   if (localStorage.getItem("dealerData") === null)
//     localStorage.setItem("dealerData", JSON.stringify(Data.dealer));
//   if (localStorage.getItem("customerData") === null)
//     localStorage.setItem("customerData", JSON.stringify(Data.customer));


{/* <option value="dealer">{"Dealer"}</option>
          <option value="customer">{"Customer"}</option> */}


// function Assignment7() {
//   const [apiData,setapiData]=useState([]);
//   const [inputstate,setinputstate]=useState("");
//   console.log(inputstate)

//   const jsonData = async () => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const actualData = await res.json();
//       console.log(actualData);
//       localStorage.setItem("userdata",JSON.stringify(actualData))
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     jsonData()
//   }, []);
//   return(
//     <div>
//     <div className={"headingContainer"}>
//         <h2 className={"keysHeading"}>{"KEYS OF DATA"}</h2>
//         <p className={"keys"}>{"firstobj"}</p>
//         <p className={"keys"}>{"secondobj"}</p>
//         <p className={"keys"}>{"firstarr"}</p>
//         <p className={"keys"}>{"secondarr"}</p>
//         <p className={"keys"}>{"username"}</p>
//         <p className={"keys"}>{"email"}</p>
//     </div>
//     <form>
//       <input type="text" value={inputstate}  placeholder="Enter the Search Key" className={"inputField"}
//       onChange={(E)=>setinputstate(E.target.value)}/>
//       <input type="submit" value="SEARCH"  className={"searchbtn"}/>
//     </form>
//   </div>
//   );
// }

export default Assignment7;
