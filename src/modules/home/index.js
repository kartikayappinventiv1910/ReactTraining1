import React, { Component } from "react";
import "./index.css";
import image from "./container1image.png"

class Home extends Component {
  render() {
    return (
      <div className={"homeContainer"}>
        <div className={"mainContainer"}>
          <div className={"itemContainer1"}>
            <h1 className={"container1Head1"}>{"Save your"}</h1>
            <p className={"container1Head2"}>{"money now."}</p>
            <p className={"cont1Para1"}>
              Manage your company Bot in few easy steps.Join our Pro plan to try
              a 360&#176; experience of our service.
            </p>
            <p className={"cont1Para2"}>
              {
                "Start your 14 days of free Pro plan. You can always upgrade it or stay with the Life version for free."
              }
            </p>
            <img src={image} className={"container1image"}></img>
          </div>
          <div className={"itemContainer2"}>
            <div className={"itemcont2Head"}>
              <p className={"container2Head2"}>
                Start now<br></br> your <b>free plan.</b>
              </p>
            </div>
            <div className={"content2"}>
              <div className={"container2ContentHead"}>
                <p className={"contentHead1"}>Lite</p>
                <p className={"contentHead2"}>Free</p>
              </div>
              <div className={"container2ContentHead"}>
                <hr className={"horizontal1"} />
                <p className={"contentHead3"}>with restrictions</p>
              </div>
              <p className={"contentTopic"}>
                <b>Plan includes:</b>
              </p>
              <div className={"content2Points"}>
                <div className={"longpara"}>
                  <div className={"longparatick"}>
                    <span className={"tick1"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"longpoints"}>
                    Manage conversations directly from your website.
                  </p>
                </div>
              </div>
              <div className={"pointsblock"}>
                <p className={"points"}>
                  <span className={"tick1"}>&#10003;</span>Bot without the AI
                  service.
                </p>
              </div>
              <div className={"pointsblock"}>
                <p className={"points"}>
                  <span className={"tick1"}>&#10003;</span>Achieved chat for 30
                  days.
                </p>
              </div>
              <div className={"pointsblock"}>
                <p className={"points"}>
                  <span className={"tick1"}>&#10003;</span>Free,for always.
                </p>
              </div>
              <div className={"viewFeature2"}>
                <a href={"#"}>View all the features</a>
              </div>
              <button className={"button2"}>
                Start 14 days of free Pro plan
              </button>
            </div>
          </div>
          <div className={"itemContainer3"}>
            <div className={"itemcont3Head"}>
              <p className={"container3Head"}>
                Are you a corporate?<br></br>
                <a href={"#"} className={"contactus"}>
                  Contact us
                </a>
              </p>
            </div>
            <div className={"content3"}>
              <div className={"container3ContentHead"}>
                <p className={"content3Head1"}>Pro</p>
                <p className={"content3Head2"}>29$</p>
              </div>
              <div className={"container3ContentHead"}>
                <hr className={"horizontal2"} />
                <p className={"content3Head3"}>montly</p>
              </div>
              <p className={"content2Topic"}>
                <b>All of Lite plus:</b>
              </p>
              <div className={"content2Points"}>
                <div className={"longpara"}>
                  <div className={"longparatick"}>
                    <span className={"tick2"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"longpoints3"}>
                    Bot with AI that can recognize the user's behaviour and can
                    automatize the sentences.
                  </p>
                </div>
              </div>
              <div className={"pointsblock3"}>
                <p className={"points3"}>
                  <span className={"tick2"}>&#10003;</span>Unlimited
                  conversational flows.
                </p>
              </div>
              <div className={"content2Points"}>
                <div className={"longpara"}>
                  <div className={"longparatick"}>
                    <span className={"tick2"}>&#10003;</span>
                  </div>
                  <div className={"longparacont"}></div>
                  <p className={"longpoints3"}>
                    Facebook, Twitter, Instagram and Linkedin integration.
                  </p>
                </div>
              </div>
              <div className={"pointsblock3"}>
                <p className={"points3"}>
                  <span className={"tick2"}>&#10003;</span>Achieved chat without
                  limits.
                </p>
              </div>
              <div className={"viewFeature3"}>
                <a href={"#"}>View all the features</a>
              </div>
              <button className={"button3"}>
                Start 14 days of free Pro plan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
