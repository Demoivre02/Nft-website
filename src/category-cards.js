import React from "react";
import "./category-card.css"
 
export default function Cardbody(props){
    return(
        <>
        <div className="card-body">
            <div className="card-img">
                <img className="card__image" src={props.src} />
            </div>
            <div className="card-text">
                <h3>{props.text}</h3>
            </div>
        </div>
        </>
    )
}