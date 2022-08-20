import React, {useState } from "react";
import { Items } from "./Items";
import { products } from "./Product";


export function Cart(){
    const [item]=useState(products);
  
    
    return(
        <div className="cart-item">
            <h5>Your Cart</h5><hr /> 
            <div className="cart-item-container">
                {
                    item.map((curItem)=>{
                        return <Items key={curItem.id}{...curItem}/>
                    })
                }
                
            
            <h4>Total Cost :<span>1300₹</span></h4>
            </div>

        </div>
    )
}