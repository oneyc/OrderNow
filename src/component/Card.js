import classes from './Card.module.css'
import CartContext from '../store/cart-context'
import { useContext } from 'react'

const Card = (props) => {
    const cartCtx = useContext(CartContext)

    const submitHandler = (event) =>{
        event.preventDefault();
        cartCtx.addItem(
            {
                "name":props.data.name,
                "itemAmount": 1,
                "price":props.data.final_price,
                "final_price":props.data.price
            }
            )
    }

    return(
        <div className={classes.card}>
            <img src={props.data.image}></img>
            <h3 className={classes.title}>{props.data.name}</h3>
                <div className={classes.price}>
                <p className={classes.priceDiscounted}>{props.data.currency} {props.data.final_price}</p>
                <p className={classes.priceOriginal}>{props.data.currency} {props.data.price}</p>
            </div>
            <button className={classes.button} onClick={submitHandler}>Buy Now</button>
        </div>
    )
}

export default Card;