import React, { Component } from "react";
import "./index.css";
import logo from "./logo.png";
import menu from "./menu.png";
import user from "./user.png";
import setting from "./setting.png";
import notification from "./notfication.png";

class Assignment4 extends Component {
  render() {
    return (
      <div className={"mainContainer"}>
        <div className={"gridview"}>
          <div className={"header1"}>
            <div class={"menu"}>
              <div className={"linetop"}></div>
              <div className={"linemiddle"}></div>
              <div className={"linebottom"}></div>
            </div>

            <img src={logo} className={"logo1"}></img>
            <img src={setting} className={"setting"}></img>
            <img src={notification} className={"notification"}></img>
            <img src={user} className={"user"}></img>
          </div>
          <h1 className={"heading"}>{"Support"}</h1>
          <div className={"search-container"}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Search Xcoin support"
              className="search"
            ></input>
          </div>
          <div className={"mainContent"}>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Verification</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Order</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>{" "}
            <div className="card">
              <h2 className="buy-currency">Wallet</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Payment Methods</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Others</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Security</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Referral Program</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
          </div>
        </div>
        <div className={"flexview"}>
        <div className={"leftContainer"}>
          <div className={"leftheader"}>
            <img src={logo} className={"logoflex"}></img>
          </div>
          <p className={"topic"}>{"TOPICS"}</p>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Affiliate Program"}</p>
          </div>
          <div className={"leftcontent2"}>
            <p className={"lefttopic"}>{"Buy & Sell Cryptocurrencies"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Contact Us"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"My Xcoin Account"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Orders"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Payment Methods"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Security"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Verification"}</p>
          </div>
          <div className={"leftcontent"}>
            <p className={"lefttopic"}>{"Wallet"}</p>
          </div>
        </div>
        <div className={"rightContainer"}>
          <div className={"rightheader"}>
            <p className={"support2"}>{"Support"}</p>
            <select className={"headerselect"}></select>
            <button type={"button"} className={"headerbutton"}>
              {"BACK TO XCOIN"}
            </button>
          </div>
          <div className={"searchcontainer"}>
            <input
              type="text"
              placeholder="Search Xcoin support"
              className={"search2"}
            ></input>
          </div>
          <div className={"rightcontent"}>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
            <div className="card">
              <h2 className="buy-currency">Buy Currency</h2>
              <p className="what-currencies">What currencies do we accept?</p>
              <p className="what-currencies">What is minimum order amount?</p>
              <p className="what-currencies">What is cash advance fees?</p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="what-currencies">
                Etherium order and smart contracts.
              </p>
              <p className="see-all-article">See all article</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Assignment4;
