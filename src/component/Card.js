import classes from './Card.module.css'
import apiData from '../data/apiData'
import Button from './Button'

const Card = (props) => {
    console.log(props)
    return(
        <div className={classes.card}>
            <img src={props.data.image}></img>
            <h3 className={classes.title}>{props.data.name}</h3>
                <div className={classes.price}>
                <p className={classes.priceDiscounted}>{props.data.currency} {props.data.final_price}</p>
                <p className={classes.priceOriginal}>{props.data.currency} {props.data.price}</p>
            </div>
            <Button/>
        </div>
    )
}

export default Card;