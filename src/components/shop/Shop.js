import React, {Component} from 'react';
import classes from './Shop.module.css'

import {connect} from 'react-redux'
import {addToCart, addToWishlist, addProductsFromBackend} from "../../redux/actions";
import {ShopItem} from "../shop-item/shop-item";


class Shop extends Component {

 async  componentDidMount() {
     const res = await fetch('https://fakestoreapi.com/products');
     const data = await res.json();
     this.props.addProductsFromBackend(data)
     console.log(data);

 }

    render() {

        return (
            <div className='container'>
                <div className={classes.Shop} >
                    {this.props.products.map(prod => (
                        <ShopItem
                            key={prod.id}
                            item={prod}
                            onAddToCart={()=> this.props.addToCart(prod)}
                            onAddToWishlist={()=> this.props.addToWishlist(prod)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {...state}
}




export default connect(mapStateToProps, {
    addToCart,
    addToWishlist,
    addProductsFromBackend,



})(Shop);
