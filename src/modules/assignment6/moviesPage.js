import React, { useState, useEffect , memo} from "react";
import "./index.css";
import image1 from "./image1.jpeg";
import image3 from "./image3.webp";
import image4 from "./image4.webp";

function MoviesPage() {
  const [rating, setRating] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setRating(rating + Math.floor(Math.random() * 4));
    }, 3000);
  }, [rating]);
  console.log(rating)
  const renderBox = (img, moviename, releaseDate, rating) => {
    return (
      <div className={"moviecard"}>
        <img src={img}></img>
        <div className={"movieContent"}>
          <h3 className={"moviename"}>{moviename}</h3>
          <p className={"releasedate"}>{releaseDate}</p>
          <p className={"rating"}>{rating}</p>
        </div>
      </div>
    );
  };
  return (
    <div className={"movieContainer"}>
      {renderBox(image1, "ETERNAL", "10th December 2020", rating)}
      {renderBox(image3, "INCREDIBLES", "5th June 2018", "7")}
      {renderBox(image4, "CIVIl WAR", "6th May 2016", "8.5")}
    </div>
  );
}

export default memo(MoviesPage);
