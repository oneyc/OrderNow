import Modal from "./Modal"
import CartContext from "../store/cart-context"
import React, { useContext } from "react"
import classes from "./Cart.module.css"

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const cartMapping = cartCtx.items.map((item) => (
        <div className={classes.cartItems}>
            <img className={classes.itemImage} src={item.image}></img>
            <h2 className={classes.itemTitle}>{item.name}</h2>
            <div className={classes.cartAmount}>
                <div className={classes.plusMinus} onClick={() => {cartCtx.addItemInCart(item.name)}}>+</div>
                <h2 className={classes.itemAmount}>{item.itemAmount}</h2>
                <div className={classes.plusMinus} onClick={() => {cartCtx.removeItem(item.name)}}>-</div>

            </div>
            <h2 className={classes.itemPrice}>USD {(item.price * item.itemAmount).toFixed(2)}</h2>
        </div>
        )
    )

    const checkOutHandler = (event) => {
        event.preventDefault();
        alert('Checkout')

    }

    return (
    <Modal toggleCart={props.toggleCart}>
        <div className={classes.container}>
            <div className={classes.closeModal} onClick={props.toggleCart}>X</div>
        {cartCtx.items.length > 0 ? <React.Fragment>
            <h1 className={classes.title}>Cart</h1>
            <hr/>
            <div className={classes.cart}>
                {cartMapping}
            </div>
            <hr/>
            <div className={classes.price}>
                <div className={classes.priceField}>
                    <h3 className={classes.label}>Original Price</h3>
                    <h3 className={classes.priceNumDiscount}>USD {cartCtx.totalAmountOriginal.toFixed(2)}</h3>
                </div>
                <div className={classes.priceField}>
                    <h3 className={classes.label}>Discounts</h3>
                    <h3 className={classes.priceNumDiscount}>USD {(cartCtx.totalAmountOriginal - cartCtx.totalAmount).toFixed(2)}</h3>
                </div>
                <div className={classes.priceField}>
                    <h3 className={classes.label}>Grand Total</h3>
                    <h3 className={classes.priceNum}>USD {cartCtx.totalAmount.toFixed(2)}</h3>
                </div>
            </div>
            <div className={classes.buttonArea}>
                <button onClick={checkOutHandler}>Checkout</button>
            </div></React.Fragment>:
             <h1 className={classes.titleEmpty}>Cart is Empty...</h1>}
        </div>
    </Modal>
    )
}

export default Cart