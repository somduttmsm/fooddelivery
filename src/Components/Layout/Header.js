import React,{Fragment} from 'react'
import mealsImage from "../../assests/meals.jpg"
import classes from "./Header.module.css"
import HeaderButton from './HeaderButton'

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  )
}
