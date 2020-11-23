import './shop-item.css'
import React from "react";
import {useSelector} from 'react-redux'

export const ShopItem = (props) => {
    let {title, price, image, id} = props.item;
    let wishList = useSelector(({wishLists}) => wishLists);
    const isAddedToWishlist = wishList.find(el=> el.id === id)

    return (
        <div className='card'>
            <div>
                <h3> {title}</h3> <br/>

            </div>
            <div ><img style={{width: '100px', height: '100px'}} src={image} alt=""/></div>
            <strong style={{fontWeight: '20px'}}>Price: {price}$ </strong>
            <div className='div-btn'>
                <button className='btn' onClick={props.onAddToCart}>Add to cart</button>
                <button className='btn' onClick={props.onAddToWishlist}>
                    {!isAddedToWishlist?'Add to wishlist' : 'Remove from wishlist'}
                </button>
            </div>
        </div>
    )
}
