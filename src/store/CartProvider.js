import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalAmountOriginal: 0,
}

const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedTotalAmount = state.totalAmount + action.item.final_price
        const updatedTotalAmountOriginal = state.totalAmountOriginal + action.item.price

        const existingCartItemName = state.items.findIndex(
            item => item.name === action.item.name)
        const existingCartItem = state.items[existingCartItemName]
        let updatedItems;

        if(existingCartItem){
            console.log("Same item found")
            const updatedItem = {
                ...existingCartItem,
                itemAmount: existingCartItem.itemAmount + action.item.itemAmount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemName] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item)
        }
        
        console.log(state)
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalAmountOriginal: updatedTotalAmountOriginal
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const[cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCart = (title) => {
        dispatchCartAction({type: 'REMOVE', title: title})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalAmountOriginal: cartState.totalAmountOriginal,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;