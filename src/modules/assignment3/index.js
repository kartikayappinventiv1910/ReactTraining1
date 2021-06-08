import React, { Component } from "react";
import "./index.css";
import logo from "./logo.png";
import bitcoin from "./bitcoin.png";
import usa from "./usa.png";
import mastercard from "./mastercard.png";
import visa from "./visa.jpeg";
import s3image1 from "./section3image1.png";
import s3image2 from "./section3image2.png";
import s3image3 from "./section3image3.png";
import s4image1 from "./section4image1.png";
import s4image2 from "./section4image2.png";
import s4image3 from "./section4image3.png";
import section5 from "./section5image.png";
import section6img1 from "./section6image1.png";
import section6img2 from "./section6image2.png";
import section6tick from "./section6tick.png";
import section7img1 from "./section7image1.png";
import section7img2 from "./section7image2.png";
import section7img3 from "./section7image3.png";
import section8img from "./section8image.png";
import footerimage1 from "./footerimage1.png";
import footerimage2 from "./footerimage2.png";
import footerimage3 from "./footerimage3.png";
import footerimage4 from "./footerimage4.png";


class Assignment3 extends Component {
  renderBox1(img, heading, content,number,extraclass="") {
    return (
      <div className={"cardBlue"}>
        <img src={img} className={extraclass}></img>
        <div className={"cardBlueHead"}>
          <div class="oval-active"><span class="oval_inner-active">{number}</span></div>
          <h3 className={"blueContainerHead"}>{heading}</h3>
          </div>
          <p className={"blueContainerPara"}>{content}</p>
      </div>
    );
  }

  renderBox2(img, heading, content,number,extraclass="") {
    return (
      <div className={"cardBlue"}>
        <img src={img} className={extraclass}></img>
        <div className={"cardBlueHead"}>
          <div class="ovalActiveGreen"><span class="oval_inner-active">{number}</span></div>
          <h3 className={"blueContainerHead"}>{heading}</h3>
          </div>
          <p className={"blueContainerPara"}>{content}</p>
      </div>
    );
  }
  renderBox3(img, heading) {
    return (
      <div className={"section7card"}>
          <img src={img}></img>
          <h3 className={"section7imagecont"}>{heading}</h3>
      </div>
    );
  }
  render() {
    return (
      <div className={"mainWrapper"}>
        <div className={"rectangle"}>
          <div className={"header"}>
            <div className={"logo"}>
              <img src={logo} alt={"no image"} className={"logoimg"} />
            </div>
            <div className={"headicon"}>
              <ul>
                <li><a href={"#"}>{"BUY BITCOIN"}</a></li>
                <li><a href={"#"}>{"BLOG"}</a></li>
                <li><a href={"#"}>{"ABOUT"}</a></li>
                <li><a href={"#"}>{"CONTACT US"}</a></li>
              </ul>
            </div>
            <div className={"headbtns"}>
            <img src={usa} className={"dropdownimg"}></img>
              <select className={"selectlang"}>
                  <option className={"languageopt"}>ENG</option>
              </select>
              <button type={"button"} className={"headbtn1"}>{"LOGIN"}</button>
              <button type={"button"} className={"headbtn2"}>{"SIGNUP"}</button>
            </div>
          </div>
          <div className={"section1"}>
            <div className={"section1Left"}>
              <h1 className={"section1LeftHead"}>{"Buy and store Bitcoin now"}</h1>
              <p className={"section1LeftPara"}>{"Simply, Securely & without the wait,Xcoins is your way to cryptocurrency.Start buying and keeping cryptocurrencies in your Xcoins wallet today."}</p>
            </div>
            <div className={"section1Right"}>
              <h3 className={"section1RightHead"}>{"Get your crypto now!"}</h3>
              <button className={"sellbutton"}>{"SELL"}</button>
              <button className={"buybutton"}>{"BUY"}</button>
              <div className={"section1Input"}>
                  <img src={usa} className={"inputsymbol"}></img>
                  <input type={"number"} placeholder={"100"} className={"section1input1"}></input>
                  <select className={"country"}>
                  <option className={"countryoptions"}>USD</option>
                  <option className={"countryoptions"}>IND</option>
                  </select>
              </div>
              <hr className={"section1hor"}></hr>
              <div className={"section1Input"}>
                  <img src={bitcoin}></img>
                  <input type={"number"} placeholder={"0.000923445"} className={"section1input1"}></input>
                  <img src={bitcoin}></img>
              </div>
              <button type={"button"} className={"section1btn"}>
                {"BUY BITCOINS"}
              </button>
            </div>
          </div>
          <div className={"section2"}>
            <div className={"masterCard"}>
            <img src={mastercard}></img>
            <p className={"masterPara1"}>{".... .... .... 1234"}</p>
            <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"Card Holder"}</p><span className={"masterSpan"}>Expires</span></div>
            <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"George Dux"}</p><span className={"masterSpan"}>01/24</span>
            </div></div>
            <div className={"visaCard"}>
                <img src={visa}></img>
                <p className={"masterPara1"}>{".... .... .... 1234"}</p>
                <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"Card Holder"}</p><span className={"masterSpan"}>Expires</span></div>
            <div className={"masterDetail"}>
            <p className={"masterPara2"}>{"John Connor"}</p><span className={"masterSpan"}>12/24</span>
            </div>
            </div>
            <div className={"contentCard"}>
              <h2 className={"section2Heading"}>{"Exchange your Dogecoins instantly!"}</h2>
              <p className={"section2Para"}>{"Buy and sell your Doge using your Visa or Mastercard debit or credit card"}</p>
            </div>
          </div>
          <div className={"section3"}>
            <h2 className={"section3Head1"}>{"How to Buy Dogecoin"}</h2>
            <p className={"section3Head2"}>{"Only 3 simple steps"}</p>
            <div className={"section3Cards"}>
            {this.renderBox1(s3image1, "Get verified quickly",
            "Just sign up, upload your verification documents and open your account.",1
          )}
          {this.renderBox1(s3image2, "Buy Dogecoin",
            "Select which coin you would like to buy and how much you want to puchase.",2
          )}
          {this.renderBox1(s3image3, "Receive coins",
            "Will send your coins to your wallet within 15 minutes of payment approval.",3,"card3image"
          )}
            </div>
            <button type={"button"} className={"section3btn"}>{"BUY DOGECOINS"}</button>
          </div>
          <div className={"section3"}>
            <h2 className={"section3Head1"}>{"How to Sell Dogecoin"}</h2>
            <p className={"section3Head2"}>{"Only 3 simple steps"}</p>
            <div className={"section3Cards"}>
            {this.renderBox2(s4image1, "Get verified quickly",
            "Just sign up, upload your verification documents and open your account.",1
          )}
          {this.renderBox2(s4image2, "Sell Dogecoin",
            "Select Dogecoin under the sell tab and decide how much you want to sell.",2
          )}
          {this.renderBox2(s4image3, "Receive cash",
            "Will send your coins to your wallet within 15 minutes of payment approval.",3,
          )}
            </div>
            <button type={"button"} className={"section4btn"}>{"SELL BITCOINS"}</button>
          </div>
          <div className={"section5"}>
          <img src={section5} alt={"no image"} className={"section5img"}></img>
          <div className={"section5content"}>
              <h2 className={"section5head"}>{"Why Buy & Sell Dogecoin with Xcoins?"}</h2>
              <i class="fa fa-lock"></i><p className={"section5ParaHead"}>{"Encryption Technology"}</p>
              <p className={"section5ParaCont"}>{"Xcoins reputation for speed and security will keep you coming back. World-class encryption technology keeps your data secure and your transaction safe."}</p>
              <i class="fa fa-comment"></i><p className={"section5ParaHead"}>{"Customer Care"}</p>
              <p className={"section5ParaCont"}>{"If you have any questions about Dogecoin or how to buy & sell it. You can contact our 24/7 customer support team."}</p>
              <div className={"section5footdiv"}><p className={"section5foot"}>{"Buy and sell Dogecoin today"}</p>
              <button type={"button"} className={"section5btn"}>{"SIGN UP"}</button>
              </div>
          </div>
          </div>
          <div className={"section6"}>
              <div className={"section6left"}>
              <img src={section6img1} className={"boximage"}></img>
              <div className={"boxcontent"}>
                 <img src={section6tick}></img>
                 <p className={"section6para"}>{"Decentralized"}</p>
              </div>
              </div>
              <div className={"section6center"}>
              <h2 className={"section6Head"}>{"What is Dogecoin?"}</h2>
              <p className={"section6ParaCen"}>{"Dogecoin(Doge) is a cryptocurrency created by software engineers in 2013. It's been stated that it was created jokingly as a homage to Bitcoin, but with recent price surges, it's becoming a much more serious investment for crpto-enthusiasts."}</p>
          </div>
          </div>
              <div className={"section6right"}>
              <img src={section6img2} className={"boximage"}></img>
              <div className={"boxcontent"}>
              <img src={section6tick}></img>
              <p className={"section6para"}>{"Peer-to-Peer"}</p>
              </div>
              </div>
          <div className={"section7"}>
              <h2 className={"seaction7head"}>{"Where Can I Spend my Dogecoin?"}</h2>
              <p className={"section7para"}>{"There are variet of fashion and clothing shops online accepting Doge as payment. You can also use your doge to pay for domains and hosting, or online casinos."}</p>
              <div className={"section7image"}>
              {this.renderBox3(section7img1, "CLOTHING STORES")}
              {this.renderBox3(section7img2, "DOMAINS & HOSTING")}
              {this.renderBox3(section7img3, "ONLINE CASINOS")}
              </div>
          </div>
          <div className={"section8"}>
          <img src={section8img} alt={"no image"} className={"section5img"}></img>
          <div className={"section8content"}>
              <h2 className={"section5head"}>{"Is Dogecoin For Me?"}</h2>
              <p className={"section5ParaCont"}>{"Dogecoin, although created for fun, has recently had a large price surge. Its growth in popularity also means that more companies are accepting it as a form of payment"}</p>
              <div className={"section5footdiv"}><p className={"section5foot"}>{"Buy and sell Dogecoin today"}</p>
              <button type={"button"} className={"section5btn"}>{"SIGN UP"}</button>
              </div>
          </div>
          </div>
          <div className={"footer"}>
             <div className={"footerhead"}>
              <div className={"footImage"}>
                  <img src={logo} alt={"no image"} className={"footimage1"}></img>
                  <img src={footerimage1} alt={"no image"} className={"footimage1"}></img>
              </div>
              <div className={"footerhead1"}>
              <h4 className={"footerhead"}>{"COMPANY"}</h4>
              <p className={"footerPara"}>{"About Us"}</p>
              <p className={"footerPara"}>{"Careers"}</p>
              </div>
              <div className={"footerhead1"}>
              <h4 className={"footerhead"}>{"SUPPORT"}</h4>
              <p className={"footerPara"}>{"Help Centers"}</p>
              <p className={"footerPara"}>{"Contact"}</p>   
              </div>
              <div className={"footerhead1"}>
              <h4 className={"footerhead"}>{"SOCIAL"}</h4>
              <div className={"iconclass"}><i class="fa fa-instagram"></i><p className={"footerPara"}>{"Blog"}</p></div>
              <div className={"iconclass"}><i class="fa fa-twitter"></i><p className={"footerPara"}>{"Twitter"}</p></div>
              <div className={"iconclass"}><i class="fa fa-facebook"></i><p className={"footerPara"}>{"Facebook"}</p>
              </div>
              </div>
              </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Assignment3;


