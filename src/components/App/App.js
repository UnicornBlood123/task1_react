import React, {Component} from "react";

import './Style.css';
import Items from "../Items/Items";


const App = ({data}) => {
        return (
            <div>
                <h1>Фрукты</h1>;
                <Items data = {data}/>
            </div>
        );
}

export default App;