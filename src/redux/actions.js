import {
    ADD_PRODUCTS_FROM_BACKEND,
    ADD_QUANTITY,
    ADD_TO_CART,
    ADD_TO_WISH_LIST,
    CARD_TOGGLE_HANDLER,
    DEC_QUANTITY,
    DELETE_ITEM_IN_CART, REMOVE_FROM_WISHLIST
} from "./actionTypes";

export const addToCart = (payload) => ({type: ADD_TO_CART, payload})

export const addToWishlist = (payload) => ({type: ADD_TO_WISH_LIST, payload})

export const cardToggleHandler = () => ({type: CARD_TOGGLE_HANDLER});

export const addQuantity = (payload) => ({type: ADD_QUANTITY, payload})

export const decQuantity = (payload) => ({type:DEC_QUANTITY, payload})

export const deleteItemInCart = (payload) => ({type:DELETE_ITEM_IN_CART, payload})

export const removeFromWishlist = (payload) => ({type:REMOVE_FROM_WISHLIST, payload})

export const addProductsFromBackend = (payload) => ({type:ADD_PRODUCTS_FROM_BACKEND, payload})
