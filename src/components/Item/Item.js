import React from "react";
import './Style.css';

const Item = ({name,price,url}) => {
    return (
        <div className="item">
            <div className="name">{name}</div>
            <img src={url} alt=""/>
            <div className="price">{price}р</div>
        </div>
    );
}

export default Item;
