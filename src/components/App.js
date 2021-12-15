import React, {Component} from "react";

import '../styles/App.css';
import Items from "./Items";


const App = (props) => {
        return (
            <div>
                <h1>Фрукты</h1>;
                <Items data = {props.data}/>
            </div>
        );
}

export default App;