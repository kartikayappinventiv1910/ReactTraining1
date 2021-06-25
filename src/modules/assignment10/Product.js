import React from "react";
import { useHistory,Link } from "react-router-dom";
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
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p className={"productCardID"}>Product ID:{user.id}</p>
                <h3 className={"productCardHead"}>{user.first_name}</h3>
                <p className={"productCardDetail"}>{user.email}</p>
                <button className={"moreButton"}>
                  <Link
                    to={`/ProductDetail/${user.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    More Detail
                  </Link>
                </button>
              </div>
            );
          })}
        {/* {Data.map((curr) => (
          
          <div key={curr.id} className={"ProductCard"}>
            <p className={"productCardID"}>Product ID:{curr.id}</p>
            <h3 className={"productCardHead"}>{curr.heading}</h3>
            <p className={"productCardDetail"}>{curr.description}</p>
            <button className={"moreButton"}>
              <Link
                to={`/ProductDetail/${curr.id}`}
                style={{ textDecoration: "none" }}
              >
                More Detail
              </Link>
            </button>
          </div>
        ))} */}
      </div>
    </>
  );
}
export default Product;
