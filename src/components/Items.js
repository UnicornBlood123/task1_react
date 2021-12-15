import React, {Component} from "react";
import Item from "./Item";
import '../styles/App.css';

const Items = (props) => {
    let items = props.data.map((el) => <Item name={el.name} url={el.imageUrl} price={el.price}/>)
    return (
        <div className="container">
            {items}
        </div>
    );
}

export default Items;