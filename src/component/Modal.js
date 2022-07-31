import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'
import Button from './Button'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.toggleCart}></div>
}

const ModalOverlay = (props) => {
    return (
    <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
        <Button onClick={props.toggleCart}>Checkout</Button>
    </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop toggleCart={props.toggleCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay toggleCart={props.toggleCart}>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )

}

export default Modal;