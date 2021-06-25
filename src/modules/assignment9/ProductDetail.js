import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail(id , heading , detail) {
  const [logged, setLogged] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const history = useHistory();
  const { ProductID } = useParams();
  // console.log(ProductID);
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
    // console.log(json.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      </div>
    </div>
  );
}

export default ProductDetail;
