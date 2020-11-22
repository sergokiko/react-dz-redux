import React from "react";
import classes from './Cart.module.css'
import './Cart.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {cardToggleHandler} from "../../redux/actions";
import {store} from "../../redux/store";
import {CartItem} from "./CartItem";

export const Cart = (props) => {
    const onClickHandler = (e) => {
        e.stopPropagation()

    }
    const dispatch = useDispatch()
    const onCloseCard = () =>{
        dispatch(cardToggleHandler())
    }
     let cartItems = useSelector( store => store.cart)

  const sumPrice = cartItems.reduce((acc, el)=>{
           return (acc + el.quantity*el.price)
       },0 )
    return(

        <div className={classes.Cart} onClick={onClickHandler} >
            <i className={classes.closer} onClick={onCloseCard}>&times;</i>
            <div className={classes.cartItems} >
                {cartItems.map(el => (
                    <CartItem item = {el} />
                    )
                )}
            </div>
            <strong> Total: {sumPrice.toFixed(2)}$</strong>
        </div>

    )
}
