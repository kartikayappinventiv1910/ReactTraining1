import React from 'react'
// import Home from './modules/home'
// import Assignment2 from './modules/assignment2'
// import Assignment3 from './modules/assignment3'
// import Assignment4 from './modules/assignment4'
// import Assignment4flex from './modules/assignment4flex'
// import Assignment5 from './modules/assignment5'
// import Assignment6 from './modules/assignment6'
// import Assignment7 from './modules/assignment7'
// import Assignment8 from './modules/assignment8'
import Assignment9 from './modules/assignment9'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './modules/assignment9/Product';
import Login from './modules/assignment9/Login';
import ProductDetail from './modules/assignment9/ProductDetail';

class App extends React.Component{
  render(){
    return(
      
        <div>
        {/* <Home /> */}
        {/* <Assignment2 /> */}
        {/* <Assignment3 /> */}
        {/* <Assignment4 /> */}
        {/* <Assignment4flex /> */}
        {/* <Assignment5 /> */}
        {/* <Assignment6 /> */}
        {/* <Assignment7 /> */}
        {/* <Assignment8 /> */}

        {/* ASSIGNMENT 9 */}
        {/* <Assignment9 /> */}
        <Router>
        <Switch>
            <Route path={"/"} exact>
              <Login />
            </Route>
            <Route path={"/Product"}>
              <Product />
            </Route>
            <Route path={"/ProductDetail/:ProductID"}>
              <ProductDetail />
            </Route>
          </Switch>
        </Router>
      </div>
      
      
    );
  }
}

export default App;