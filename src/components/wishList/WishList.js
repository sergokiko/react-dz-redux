import {useSelector} from 'react-redux'
import {WishItem} from "./WishItem";
import classes from './WishList.module.css'
import {NavLink} from "react-router-dom";


export const WishList = () => {
    const wishList = useSelector(state => state.wishLists)

    return (
        <div className='container'>
            <div className={classes.Wishlist}>
                <h1>My wishlist</h1>
                <hr/>
                <NavLink to='/'><button className={classes.WishlistButton}>Return to shop</button></NavLink>
                {(wishList.length) ?
                    (wishList.map(el => <WishItem key={el.id} item={el}/>)) :
                    (<h2>Wishlist is empty</h2>)
                }
            </div>
        </div>
    )
}
