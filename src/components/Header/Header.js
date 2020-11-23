import React from 'react'
import classes from './Header.module.css'

import {useSelector, useDispatch} from "react-redux";
import {cardToggleHandler} from "../../redux/actions";
import {NavLink} from "react-router-dom";

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
                    <div className={classes.logoBtn}><NavLink to='/'><h1>My Shop</h1></NavLink></div>
                    <div>
                        <button className={classes.wishlistBtn}><NavLink to='/wishlist'> Wish list: {wishList.length} </NavLink></button>
                        <button onClick={onCartOpen} >Cart: {itemsInCart}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
