import {
    ADD_QUANTITY,
    ADD_TO_CART,
    ADD_TO_WISH_LIST,
    CARD_TOGGLE_HANDLER,
    DEC_QUANTITY,
    DELETE_ITEM_IN_CART
} from "./actionTypes";

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})

export const addToWishlist = (payload) => ({type: ADD_TO_WISH_LIST, payload})

export const cardToggleHandler = () => ({type: CARD_TOGGLE_HANDLER});

export const addQuantity = (payload) => ({type: ADD_QUANTITY, payload})

export const decQuantity = (payload) => ({type:DEC_QUANTITY, payload})

export const deleteItemInCart = (payload) => ({type:DELETE_ITEM_IN_CART, payload})

