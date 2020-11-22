import React from  'react';
import classes from './backdrop.module.css'
import {Cart} from "../Cart/Cart";
import {useDispatch} from "react-redux";
import {cardToggleHandler} from "../../redux/actions";

export const CartBackdrop = ()=> {
    const dispatch = useDispatch();

    const onCloseHandler = (e) => {
        dispatch(cardToggleHandler())
    }


    return (
        <div className={classes.Backdrop} onClick={onCloseHandler}>
                <Cart onClick={onCloseHandler} />
        </div>
    )
}
