import React from "react";
import Components from "./components";
import "./featured.css"
import { motion } from "framer-motion";
import { useRef ,useEffect, useState } from "react";
import compArray from "./Faetures-array";

export default function Features(){
   
    const two = useRef()
    useEffect(()=>{
        console.log(two);
        setWidth(two.current.scrollWidth + two.current.offsetWidth-300)
      console.log( two.current.clientWidth, two.current.offsetWidth,two.current.clientWidth)
    },[])
    const [width, setWidth]= useState(0)
    
    return(
        <>
        <div  className="feature-body">
            <div className="feature-header">
                <h3> Featured <span>Collection</span> </h3>
            </div>
            <motion.div ref={two}  className="carousel">
                <motion.div className="two"  >
                    <motion.div drag="x" whileTap={{cursor:"grabbing"}} dragConstraints={{right:0, left: -width}} className="feature-components">
                        {compArray.map((item)=>{
                            return(
                           <Components   image={item.image} text={item.text} 
                           Eth={item.Eth} dollars={item.dollars} key={item.key}/>
                        )})}
                        </motion.div>
                </motion.div>
            </motion.div>
            <div className="arrows">
            </div>
        </div>
        </>
    )
}