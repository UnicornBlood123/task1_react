import React, {Component} from "react";
import Item from "../Item/Item";
import './Style.css';

const Items = ({data}) => {
    return (
        <div className="container">
            {data.map((el) => <Item key = {el.id} name={el.name} url={el.imageUrl} price={el.price}/>)}
        </div>
    );
}

export default Items;