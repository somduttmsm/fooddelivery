import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContaxt from "../../store/Cart-Context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const cartCtx = useContext(cartContaxt);

  const toatlAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;
  const cartItmeRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItmeRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{toatlAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
       {cartCtx.items>0&& <button className={classes.button}>0 order</button>}
      </div>
    </Modal>
  );
}
