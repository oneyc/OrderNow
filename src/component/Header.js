import classes from './Header.module.css'

const Header = (props) => {
    return(
        <div className={classes.headerContainer}>
            <h1>OrderNow</h1>
            <h1 className={classes.cartButton} onClick={props.showCart}>Cart</h1>
        </div>
    )
}

export default Header;