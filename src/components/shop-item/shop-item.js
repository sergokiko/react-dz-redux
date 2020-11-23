import './shop-item.css'
import React from "react";

export const ShopItem = (props) => {
    let {title, price, image} = props.item

    return (
        <div className='card'>
            <div>
                <h3> {title}</h3> <br/>

            </div>
            <div ><img style={{width: '100px', height: '100px'}} src={image} alt=""/></div>
            <strong style={{fontWeight: '20px'}}>Price: {price}$ </strong>
            <div className='div-btn'>
                <button className='btn' onClick={props.onAddToCart}>Add to cart</button>
                <button className='btn' onClick={props.onAddToWishlist}>Add to wish list</button>
            </div>
        </div>
    )
}
