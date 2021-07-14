import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import RideHistory from './MVC/RideHistory';
import * as serviceWorker from "./serviceWorker";
import "style/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Controller from "MVC/Controller";

// main function - starting point of this web app
let rideHistory = new RideHistory(), controller = new Controller(rideHistory)
    
let main = () => {

  controller.load()
  const element = <App ctr={controller} />
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

window.onload = main
window.onbeforeunload = function () {
  controller.save();
 }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
