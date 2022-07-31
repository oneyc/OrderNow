import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    totalAmountOriginal: 0,
    addItem: (item) => {},
    removeItem: (title) => {},
})
;

export default CartContext;