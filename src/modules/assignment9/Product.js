import React from "react";
import { useHistory, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import "./index.css";
// import Data from "./data";

function Product() {
  const [logged, setLogged] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
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
    <>
      <div className={"productPageHeader"}>
        <h1 className={"productPageHead"}>
          <u>{"PRODUCTS AVAILABLE"}</u>
        </h1>
        <button className={"logoutButton"} onClick={() => handleLogOut()}>
          {"LOGOUT"}
        </button>
      </div>
      <div className={"productPageCard"}>
        <ProductCard id={"1"} heading={"Product 1"} detail={"Description"} />
        <ProductCard id={"2"} heading={"Product 2"} detail={"Description"} />
        <ProductCard id={"3"} heading={"Product 3"} detail={"Description"} />
        <ProductCard id={"4"} heading={"Product 4"} detail={"Description"} />
        <ProductCard id={"5"} heading={"Product 5"} detail={"Description"} />
        <ProductCard id={"6"} heading={"Product 6"} detail={"Description"} />
      </div>
    </>
  );
}
export default Product;
