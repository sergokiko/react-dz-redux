import './shop-item.css'
import React from "react";

export const ShopItem = (props) => {
    let {name, price, id} = props.item

    return (
        <div className='card'>
            <div>
                <h2>Name: {name}</h2> <br/>
                <strong>Price: {price} </strong>
            </div>
            <div className='div-btn'>
                <button className='btn' onClick={props.onAddToCart}>Add to cart</button>
                <button className='btn' onClick={props.onAddToWishlist}>Add to wish list</button>
            </div>
        </div>
    )
}
