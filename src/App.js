import React, { useState } from "react";
import Card from "./component/Card.js";
import Cart from "./component/Cart.js";
import Header from "./component/Header.js";
import Searchbar from "./component/Searchbar.js";
import apiData from './data/apiData'

function App() {

  const[showCart, setShowCart] = useState(false)

  const toggleCartModal = () => {
    console.log("Pressed")
    setShowCart(!showCart)
  }

  const CardMapping = apiData.data.map(data => {
    return (
      <Card data={data}/>
    )
  })

  return (
    <React.Fragment>
      {showCart ? <Cart toggleCart = {toggleCartModal}/> : null}
      <Header showCart = {toggleCartModal}/>
      <div style={{maxWidth: '1500px', margin: '0 auto'}}>
        <Searchbar/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>      
          {CardMapping}
       </div>
      </div>
    </React.Fragment>
  );
}

export default App;
