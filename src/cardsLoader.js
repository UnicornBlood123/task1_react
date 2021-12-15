import {mockedApi} from "./mockedApi.js";
import {card} from "./index.js";
import Loader from "./Loader";
import ReactDOM from "react-dom";
import React from "react";

window.onload = ()=>
{
    ReactDOM.render(<Loader/>, document.getElementById("root"));
    mockedApi().then(cardsData =>{
        card(cardsData);
    })
}
