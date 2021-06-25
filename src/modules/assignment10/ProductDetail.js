import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function ProductDetail() {
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
      {users.length==1 &&
          users.map((user) => {
            return (
              <div key={user.id==ProductID}>
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
        {/* <p>Product ID:{ProductID}</p> */}
        {/* <p className={"productCardID"}>Product ID:{user.id}</p>
        <h3 className={"productCardHead"}>{user.first_name}</h3>
        <p className={"productCardDetail"}>{user.email}</p>
        <button className={"buyButton"}>BUY NOW</button> */}
        {/* <h3 className={"productCardHead"}></h3>
      <p className={"productCardDetail"}></p> */}

      </div>
    </div>
  );
}

export default ProductDetail;
