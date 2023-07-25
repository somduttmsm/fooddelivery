import React,{useContext,Fragment, useState, useEffect} from "react"
import classes from "./HeaderButton.module.css"
import CartIcon from "../Cart/CartIcon"
import cartContaxt from "../../store/Cart-Context"

export default function HeaderButton(props){
    const cartCtx=useContext(cartContaxt)
    const [btnIsHighLighted,setBtnIsHighLighted]=useState(false)
    const btnClasses=`${classes.button} ${btnIsHighLighted?classes.bump:""}`
    const{items}=cartCtx
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setBtnIsHighLighted(true)
        const timer=setTimeout(()=>{
            setBtnIsHighLighted(false);
        },300);
        return()=>{
            clearTimeout(timer)
        }
    },[items])
    
    const numberOfCartItems=cartCtx.items.reduce((cartNumber,items)=>{return cartNumber+items.amount;},0)
return(
    <Fragment>
        <button onClick={props.showCartHandler}  className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    </Fragment>
)
}