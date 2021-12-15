import React from "react";
import '../styles/App.css';

const Item = (props) => {
    return (
        <div className="item">
            <div className="name">{props.name}</div>
            <img src={props.url} alt=""/>
            <div className="price">{props.price}р</div>
        </div>
    );
}

export default Item;
