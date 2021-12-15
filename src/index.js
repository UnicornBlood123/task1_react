import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";

export const card = (cardData) =>{
    ReactDOM.render(<App data = {cardData}/>, document.getElementById("root"));
}

