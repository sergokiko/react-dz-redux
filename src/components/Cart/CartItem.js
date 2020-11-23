import React from 'react'
import classes from './CartItem.module.css'
import {useDispatch} from "react-redux";
import {addQuantity, decQuantity, deleteItemInCart} from "../../redux/actions";


export const CartItem = (props) => {
    const {image, quantity, price,title} = {...props.item}
    const dispatch = useDispatch()
    const onAddQuantity = () =>{
        dispatch(addQuantity(props.item))
    }
    const onDecQuantity = () => {
        dispatch(decQuantity(props.item))
    }
    const deleteItem = () => {
        dispatch(deleteItemInCart(props.item))
    }
    return (
        <div className={classes.CartItem}>
            <div className={classes.CartItemTitle}>{title}</div>
            <div className={classes.CartItemContent}>
            <div ><img src={image} style={{width: '35px', height: '35px'}}/> </div>
            <strong>- {price}$ -</strong>
            <div>
                <button onClick={onDecQuantity}>&#8722;</button>
                <span>{quantity}</span>
                <button onClick={onAddQuantity} >&#43;</button> &nbsp;
                =&nbsp; &nbsp;{(price * quantity).toFixed(2)}</div>
            <div onClick={deleteItem} ><i className="fa fa-trash" aria-hidden="true"/></div>
            </div>
        </div>
    )
}
