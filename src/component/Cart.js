import Modal from "./Modal"
import CartContext from "../store/cart-context"
import React, { useContext } from "react"
import classes from "./Cart.module.css"

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const cartMapping = cartCtx.items.map((item) => (
        <div className={classes.cartItems}>
            <h2>{item.name}</h2>
            <h2>{item.itemAmount}</h2>
            <h2>{item.price * item.itemAmount}</h2>
        </div>

    )
    )

    return (
    <Modal toggleCart={props.toggleCart}>
        <h1>Cart</h1>
        <div className={classes.cart}>
            {cartMapping}
        </div>
        <div className={classes.price}>
            <div className={classes.priceField}>
                <h3>Original Price</h3>
                <h3>{cartCtx.totalAmountOriginal}</h3>
            </div>
            <div className={classes.priceField}>
                <h3>Discounts</h3>
                <h3>{cartCtx.totalAmountOriginal - cartCtx.totalAmount}</h3>
            </div>
            <div className={classes.priceField}>
                <h3>Grand Total</h3>
                <h3>{cartCtx.totalAmount}</h3>
            </div>
        </div>
        <button>Checkout</button>
        <button>Exit Cart</button>
    </Modal>
    )
}

export default Cart