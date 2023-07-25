import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart.js";
import CartProvider from "./store/CartProvider";
function App() {
   const [cartIsShown,setCartIshown]=useState(false)
   const showCartHandler=()=>{
    setCartIshown(true)
   }
   const hideCartHandler=()=>{
    setCartIshown(false)
   }
  return (
    <CartProvider>
     {cartIsShown &&<Cart  hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler}  />
      <Meals />
    </CartProvider>
  );
}

export default App;
