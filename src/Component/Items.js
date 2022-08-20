import React from "react";

export function Items({title,price,img}){
    return(
        <>
            <div className="item-info">
            <div className="product-img">
                        {img}
                    </div>
                    <div className="product-name">
                        {title}
                    </div>
                    <div className="price">
                        {price}
                    </div>
            </div>
        </>
    )
}