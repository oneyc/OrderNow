import React, { useState } from "react";
import Card from "./component/Card.js";
import Cart from "./component/Cart.js";
import Header from "./component/Header.js";
import Searchbar from "./component/Searchbar.js";
import apiData from './data/apiData'
import CartProvider from "./store/CartProvider";

function App() {

  const[showCart, setShowCart] = useState(false)
  const[query, setQuery] = useState("")

  const toggleCartModal = () => {
    console.log("Pressed")
    setShowCart(!showCart)
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value.toLowerCase());
}

  const CardMapping = apiData.data.filter(data => {
    return data.name.toLowerCase().includes(query)
  }).map(data => {
    return (
      <Card data={data}/>
    )
  })

  return (
    <CartProvider>
      {showCart ? 
      <Cart toggleCart = {toggleCartModal}/> :
       null}
      <Header showCart = {toggleCartModal}/>
      <div 
        style={{maxWidth: '1500px', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: '50px', paddingBottom: '50px'}}>
        <Searchbar 
          handleQueryChange={handleQueryChange}/>
        <div 
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: '50px'}}>      
          {CardMapping}
       </div>
      </div>
    </CartProvider>
  );
}

export default App;
