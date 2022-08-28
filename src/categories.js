import React from "react";
import "./categories.css"
import Array from "./category-array";
import Cardbody from "./category-cards";

export default function Categories(){
    return(
        <>
        <div className="category-body">
            <div className="category-header">
                <h3> Explore <span>categoreis</span> </h3>
            </div>
            <div className="grid">
               {Array.map((item)=>{
                return (
                    <Cardbody src={item.src} text={item.text} key={item.key} />
                )
               })}
            </div>
            <h3 className="h3">view all</h3>
        </div>
        </>
    )
}