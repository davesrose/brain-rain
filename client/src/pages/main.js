import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employee from "./employee"
import Nav from "../components/nav";
import Footer from "../components/footer"
import NoMatch from "./NoMatch";


const Main = () =>
	<Router>
    	<div className="container">
        <div className="mainContainer">
      		<Nav />
      		<Switch>
          		<Route exact path="/" component={Employee} />
          		<Route component={NoMatch} />
      		</Switch>
        </div>
        <Footer /> 		
    	</div>       
	</Router>;

export default Main;