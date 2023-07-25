import React ,{useContext} from 'react'
import classes from "./MealTtem.module.css"
import MealItemFrom from './MealItemFrom'
import cartContaxt from "../../../store/Cart-Context"

export default function MealTtem(props) {
  const cartCtx=useContext(cartContaxt)
    // const price=`$${props.price.toFixed(2)}`
    const addToCartHandler=amount=>{
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })

    }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
        <div><MealItemFrom addToCartHandler={addToCartHandler} id={props.id}/></div>
    </li>
  )
}
