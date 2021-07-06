// import { Assessment } from '@material-ui/icons';
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
// import Assignment9 from './modules/assignment9'

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Product from './modules/assignment9/Product';
// import Login from './modules/assignment9/Login';
// import ProductDetail from './modules/assignment9/ProductDetail';

// import Counter from "./modules/assignment11";
// import { Provider } from "react-redux";
// import store from "./store";

import {ThemeContext,initialState} from "./modules/assignment12";
import {MainScreen} from "./modules/assignment12/MainScreen"
import Assignment12 from "./modules/assignment12"
import Assignment13 from "./modules/assignment13"
import Assignment14 from "./modules/assignment14"

// class App extends React.Component{
//   render(){
//     return(
//       <Provider store={store}>
//         <div>
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
        {/* <Router>
        <Switch>
            <Route path={"/"} exact>
              <Login />
            </Route>
            <Route path={"/Product"} exact>
              <Product />
            </Route>
            <Route path={"/ProductDetail/:ProductID"} exact>
              <ProductDetail />
            </Route>
          </Switch>
        </Router> */}

        {/* <Counter /> */}

        
//       </div>
//        </Provider>
      
      
//     );
//   }
// }



const App = (props) => {
  // const [theme,setTheme] = useState({
  //   light: {background:"white",color:"black"},
  // })
  return(
    <div>
      {/* <ThemeContext.Provider value={initialState.dark}> */}
      {/* <MainScreen/> */}
      {/* </ThemeContext.Provider> */}
      {/* <Assignment12 /> */}
      {/* <Assignment13 /> */}
      <Assignment14 />
    </div>
  );
}

export default App;