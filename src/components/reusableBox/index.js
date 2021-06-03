import React from "react";

export default class ReusableBox extends React.Component {
  render() {
      const { image, heading, content}=this.props;
    return (
      <div className={"evenContainer"}>
        <div className={"evenContent"}>
          <h3 className={"evenContainerHead"}>{heading}</h3>
          <p className={"evenContainerPara"}>{content}</p>
        </div>
        <img src={image}></img>
      </div>
    );
  }
}
