import React from "react";
import "./components.css"

export default function Components(props){
    return(
        <>
        <div className="component-body">
            <div className="component-image">
                <img src={props.image} />
            </div>
            <div className="component-text">
                <p>{props.text} </p>
                <div className="component-price flex">
                        <h3>{props.Eth}</h3>
                        <h3>{props.dollars}</h3>
                </div>
            </div>
        </div>
        </>
    )
}