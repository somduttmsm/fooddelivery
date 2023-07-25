import React from "react"


const cartContaxt=React.createContext({
    items:[],
    total:(item)=>{},
    removeItem:(id)=>{}
});

export default cartContaxt