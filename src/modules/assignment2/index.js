import React, { Component } from "react";
import "./index.css";
import headImage from "./headImage.jpeg";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import image4 from "./image4.jpeg";
import image5 from "./image5.jpeg";
import image6 from "./image6.jpeg";
import image7 from "./image7.jpeg";
import image8 from "./image8.jpeg";
import image9 from "./image9.jpeg";
import ReusableBox from "../../components/reusableBox";

class Assignment2 extends Component {
  renderBox(img, heading, content) {
    return (
      <div className={"oddContainer"}>
        <img src={img}></img>
        <div className={"oddContent"}>
          {/* <img src={headImage} className={"headImage"}></img> */}
          <h3 className={"oddContainerHead"}>{heading}</h3>
          <p className={"oddContainerPara"}>{content}</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={"mainContainer"}>
        <div className={"headContainer"}>
          <div className={"headContent"}>
            <p className={"headContent1"}>{"9 React Developer Tools"}</p>
            <p className={"headContent2"}>{"to create Better Apps Faster"}</p>
          </div>
        </div>
        <div className={"remContent"}>
          {this.renderBox(
            image1,
            "1) React Developer Tools",
            "Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage."
          )}
          <ReusableBox
            image={image2}
            heading={"2) Create React App"}
            content={"Tool used in the process of setting up a React IDE."}
          />
          {this.renderBox(
            image3,
            "3) StoryBook",
            "Online app that lets you creat UI components."
          )}
          <ReusableBox
            image={image4}
            heading={"4) React Styleguidist"}
            content={"It offers an interactive way of creating and sharing UI."}
          />
          {this.renderBox(
            image5,
            "5) Bit",
            "CLI tool and online platform that enables you to publish React components."
          )}
          <ReusableBox
            image={image6}
            heading={"6) React Bootstrap"}
            content={
              "Powerful toolkit that comprises HTML, CSS and Javascript tools to help you create webpages and applications."
            }
          />
          {this.renderBox(
            image7,
            "7) React Sight",
            "Chrome extension for a visual illustration of all components of your app in a live tree structure."
          )}
          <ReusableBox
            image={image8}
            heading={"8) Why did you render"}
            content={
              "It alerts you in the console when an avoidable render occurs."
            }
          />
          {this.renderBox(
            image9,
            "9) React Proto",
            "Lets you drag and drop the components your way to create a UI instead of coding."
          )}
        </div>
        <div className={"footContainer"}>
          <div className={"footContent"}>
            <i class="fa fa-skype"></i>
            <p className={"footContent1"}>{"illuminous_bde10"}</p>
            <i class="fa fa-envelope"></i>
            <p className={"footContent1"}>{"bde@illuminoustechnologies.com"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Assignment2;
