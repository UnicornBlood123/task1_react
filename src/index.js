import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {data} from "./data.js"

const loadData = () =>{
    data().then(cardsData =>{
        ReactDOM.render(<App data = {cardsData}/>, document.getElementById("root"));
    })
}
window.onload = loadData();
