import React from "react";
import "./getstarted.css"


export default function Contents (props){
    return(
        <>
        <div className="container">
            <div className="content-body">
                <div className="icon">
                    {props.icon}
                </div>
                <div className="content-heading">
                    <h3>{props.heading}</h3> 
                </div>
                <div className="content-para">
            <p>At vero eos et accusamus et iusto odio dignissimos 
                ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos 
                dolores et quas molestias excepturi 
                sint occaecati cupiditate non provident.</p> 
                </div>
            </div>
        </div>
        </>
    )
}