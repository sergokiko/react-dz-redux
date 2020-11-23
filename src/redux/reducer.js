import {
    ADD_PRODUCTS_FROM_BACKEND,
    ADD_QUANTITY,
    ADD_TO_CART,
    ADD_TO_WISH_LIST,
    CARD_TOGGLE_HANDLER,
    DEC_QUANTITY,
    DELETE_ITEM_IN_CART, REMOVE_FROM_WISHLIST
} from "./actionTypes";

const initialState = {
    products: [
        // {name: 't-shirt', price: 4.26, id: 1},
        // {name: 'pants', price: 45.2, id: 2},
        // {name: 'shoes', price: 35, id: 3},
        // {name: 'shirt', price: 24, id: 4},
        // {name: 'heat', price: 8, id: 5},
    ],
    cart: [],
    wishLists: [],
    cartIsOpen: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const updatedCard = [...state.cart]
            const findItemInCart = updatedCard.find(el => el.id === action.payload.id)

            if(!findItemInCart){
                const updatedItem = {...action.payload, quantity: 1}
                updatedCard.push(updatedItem)
            }else {
                updatedCard.forEach(el => {
                    if(el.id === action.payload.id){
                        el.quantity += 1
                    }
                })
            }
            return {...state, cart: updatedCard}
        }

        case CARD_TOGGLE_HANDLER: {
            return {...state, cartIsOpen: !state.cartIsOpen}
        }
        case ADD_QUANTITY: {
            const updatedCard = [...state.cart];
            if (action.payload.quantity < 10){
                updatedCard.forEach(el => {
                    if(el.id === action.payload.id){
                        el.quantity += 1
                    }
                })
            }
            return {...state, cart: updatedCard}
        }
        case DEC_QUANTITY:{
            const updatedCard = [...state.cart];
            if (action.payload.quantity > 1){
                updatedCard.forEach(el => {
                    if(el.id === action.payload.id){
                        el.quantity -= 1
                    }
                })
            }
            return {...state, cart: updatedCard}
        }
        case DELETE_ITEM_IN_CART: {
            const updatedCard = state.cart.filter(el =>el.id !== action.payload.id)
            return {...state, cart: updatedCard}
        }
        case ADD_TO_WISH_LIST: {
            const toUpdateWishlist = state.wishLists.filter(el => el.id !== action.payload.id)
            if (toUpdateWishlist.length === state.wishLists.length) {
                toUpdateWishlist.push(action.payload)
            }
            return {...state, wishLists: toUpdateWishlist}
        }
        case REMOVE_FROM_WISHLIST: {
            const UpdatedWishlist = state.wishLists.filter(el => el.id !== action.payload.id)
            return {...state, wishLists: UpdatedWishlist }
        }
        case ADD_PRODUCTS_FROM_BACKEND: {
            return {...state, products: action.payload}
        }
        default:
            return state
    }
}
