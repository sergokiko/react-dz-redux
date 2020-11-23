import React from 'react'
import classes from './WishItem.module.css'
import {useDispatch} from 'react-redux'
import {addToCart, removeFromWishlist} from "../../redux/actions";

export const WishItem = (props) => {
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(addToCart(props.item))
    }
    const removeFromWishListHandler = () =>{
        dispatch(removeFromWishlist(props.item))
    }

    let {title, price, image} = {...props.item}
    return(
        <div className={classes.WishItem} >
            <div> <h3>{title} </h3><strong>Price: {price}$</strong> </div>
            <div className={classes.WishItemImg}><img src={image} style={{width: '100px', height: '100px'}}/></div>

           <div> <button onClick={addToCartHandler}>Add to cart</button>
                <button onClick={removeFromWishListHandler}>Remove from wishlist</button>
           </div>
        </div>
    )
}
