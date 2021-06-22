import React from "react";
import { Link, useHistory ,useParams} from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
  const [logged, setLogged] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const history = useHistory();
  const {ProductID}=useParams();
  console.log(ProductID);

  useEffect(() => {
    if (!logged) {
      history.push("/");
    }
  }, [logged]);

  const handleLogOut = () => {
    window.localStorage.setItem("token", false);
    setLogged(JSON.parse(window.localStorage.getItem("token")));
  };
  return (
    <div>
      <button className={"logoutButton"} onClick={() => handleLogOut()}>
        {"LOGOUT"}
      </button>
      <div className={"productDescription"}>
      <p>Product ID:{ProductID}</p>
      <button className={"buyButton"}>BUY NOW</button>
      {/* <h3 className={"productCardHead"}></h3>
      <p className={"productCardDetail"}></p> */}
      </div>
    </div>
  );
}

export default ProductDetail;
