import React, {Component, useState} from "react";
import Item from "../Item/Item";
import './Style.css';
import {getData} from '../../api/cardsLoader.js';
import Loader from "../Loader/Loader";

const Items = () => {
    const [data, setData] = useState(0);
    const [isLoad=false, setIsLoad] = useState(0);
    getData().then(result => {
        setData(result);
        setIsLoad(true);
    });

    if (!isLoad) {
        return (
            <Loader/>
        );
    }
    else{
        return (
            <div className="container">
                {data.map((el) => <Item key={el.id} name={el.name} url={el.imageUrl} price={el.price}/>)}
            </div>
        );
    }
}
export default Items;