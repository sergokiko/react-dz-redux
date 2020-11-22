import React from 'react'
import classes from './CartItem.module.css'
import {useDispatch} from "react-redux";
import {addQuantity, decQuantity, deleteItemInCart} from "../../redux/actions";


export const CartItem = (props) => {
    const {name, quantity, price} = {...props.item}
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
            <div>{name} - price: {price}$ -
            </div>
            <div>
                <button onClick={onDecQuantity}>&#8722;</button>
                <span>{quantity}</span>
                <button onClick={onAddQuantity} >&#43;</button>
            </div>
            <div> =&nbsp; &nbsp;{(price * quantity).toFixed(2)}</div>
            <div onClick={deleteItem} ><i className="fa fa-trash" aria-hidden="true"/></div>
        </div>
    )
}
