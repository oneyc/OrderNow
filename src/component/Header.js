import classes from './Header.module.css'

const Header = () => {
    return(
        <div className={classes.headerContainer}>
            <h1>OrderNow</h1>
            <h1>Cart</h1>
        </div>
    )
}

export default Header;