import React from "react";
import "./index.css";

export default class moviesBox extends React.Component {
  render() {
      const { image, moviename, releasedate,rating}=this.props;
    return (
        <div className={"movieContainer"}>
      <div className={"movieCard"}>
      <img src={image}></img>
        <div className={"movieContent"}>
          <h3 className={"movieName"}>{moviename}</h3>
          <p className={"movieRelease"}>{releasedate}</p>
          <p className={"movieRating"}>{rating}</p>
        </div>
        </div>
      </div>
    );
  }
}
