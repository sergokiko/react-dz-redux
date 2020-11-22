import React from 'react'
import classes from './Header.module.css'
import cart from '../../cart.jpg';
import {useSelector, useDispatch} from "react-redux";
import {cardToggleHandler} from "../../redux/actions";

export const Header = () => {
    const cart = useSelector(state => state.cart)
    const wishList = useSelector(state => state.wishLists)
    const itemsInCart = cart.reduce((acc, el) => {
        return acc + el.quantity
    }, 0)
    const dispatch = useDispatch();
    const onCartOpen = () => {
        dispatch(cardToggleHandler())
    }
    return (
        <div className={classes.headerSection}>
            <div className='container'>
                <div className={classes.Header}>
                    <div><h1>My Shop</h1></div>
                    <div>
                        <button>Wish list: {wishList.length} </button>
                        <button onClick={onCartOpen} >Cart: {itemsInCart}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
