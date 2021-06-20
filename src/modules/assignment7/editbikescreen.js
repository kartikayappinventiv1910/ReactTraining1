import React,{useState} from 'react';

const Heading = (props) => {
    return <h1 className={props.styleClass}>{props.headingText}</h1>;
  };

  const EditBikeScreen = (props) => {
    const [searchModel, setSearchModel] = useState(props.model);
    const bikeData = JSON.parse(localStorage.getItem("bikeData"));
    const obj = bikeData.find((curr) => {
      return curr.model === searchModel;
    });
    const ind = bikeData.findIndex((curr) => {
      return curr.model === searchModel;
    });
    const [bikeModel, setBikeModel] = useState(obj.model);
    const [bikePrice, setBikePrice] = useState(obj.price);
    const [regDate, setRegDate] = useState(obj.reg);
    const [expDate, setExpDate] = useState(obj.expire);
  
    const handleSave = () => {
      const modelValue = document.getElementById("bikeModel").value;
      const priceValue = document.getElementById("price").value;
      const reg = document.getElementById("regDate").value;
      const exp = document.getElementById("expDate").value;
      if (modelValue !== "") {
        bikeData[ind].model = modelValue;
        setSearchModel(modelValue);
        setBikeModel(modelValue);
      }
      if (priceValue !== "") {
        bikeData[ind].price = priceValue;
        setBikePrice(priceValue);
      }
      if (reg !== "") {
        bikeData[ind].reg = reg;
        setRegDate(reg);
      }
      if (exp !== "") {
        bikeData[ind].expire = exp;
        setExpDate(exp);
      }
      localStorage.setItem("bikeData", JSON.stringify(bikeData));
    };
    return (
      <>
        <div className={"bikeDetails"}>
          <h2>{"Bike Details"}</h2>
          <p>
            <span>{"Bike Model:  "}</span>
            {bikeModel}
          </p>
          <p>
            <span>{"Price:  "}</span>
            {bikePrice}
          </p>
          <p>
            <span>{"Registration Date:  "}</span>
            {regDate}
          </p>
          <p>
            <span>{"Expiry Date:  "}</span>
            {expDate}
          </p>
        </div>
        <Heading headingText={"Edit Form"} />
        <div className={"editForm"}>
          <form>
            <label htmlFor={"bikeModel"}>{"Bike Model"}</label>
            <input
              type={"text"}
              id={"bikeModel"}
              name={"bikeModel"}
              placeholder={"Enter bike model"}
            />
            <label htmlFor={"price"}>{"Price"}</label>
            <input
              type={"text"}
              id={"price"}
              name={"price"}
              placeholder={"Enter bike price"}
            />
            <label htmlFor={"regDate"}>{"Registration Date"}</label>
            <input
              type={"date"}
              id={"regDate"}
              name={"regDate"}
              placeholder={"Enter registration date"}
            />
            <label htmlFor={"expDate"}>{"Expiry Date"}</label>
            <input
              type={"date"}
              id={"expDate"}
              name={"expDate"}
              placeholder={"Enter expiry date"}
            />
            <button type={"button"} className={"submit"} onClick={handleSave}>
              {"Save"}
            </button>
          </form>
        </div>
      </>
    );
  };

  export default EditBikeScreen;