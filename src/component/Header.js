import classes from './Header.module.css'
import { useContext } from 'react';
import CartContext from '../store/cart-context';

const Header = (props) => {

    const cartCtx = useContext(CartContext)

    const numberOfItems = cartCtx.items.reduce((currentNumber, item) => {return currentNumber + item.itemAmount}, 0);
    
    return(
        <div className={classes.headerContainer}>
            <h1 className={classes.logo}>PogChamp</h1>
            <div className={classes.cartButton} onClick={props.showCart}>
                <h1>&#x1F6D2;</h1>
                <h1 className={classes.cartBadge}>{numberOfItems}</h1>
            </div>
        </div>
    )
}

export default Header;