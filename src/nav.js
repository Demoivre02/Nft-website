import React, { useEffect, useState, useRef } from "react";
import "./nav.css";
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

export default  function Nav  (){

   var [something,setsomething]=useState(true)

    const display= useRef()
    
    function displayNav(){
        display.current.classList.toggle("show-nav")
    }
    const handleSomethin=()=>{
        setsomething(()=>{
            something =! something
            {something ? hideNav() :  displayNav()}
    })
    }

    function hideNav(){
        display.current.classList.remove("show-nav")
    }
    
    return(
        <>
        <nav>
        <div ref={display} className="nav-body">
            <div className="nav-item">
                <div className="container">
                    <div className="nav-brand">
                       <span><h2>OpenART</h2></span>
                       
                        <Box sx={{p: 0,ml: "2rem", width:"5%", display:{ xs: 'block', lg: 'none', xl: 'none' }}}>
                        <Fab sx={{mt: .5}}  size="small" color="primary">
                            <CloseRoundedIcon onClick={handleSomethin} sx={{color:"white"}} fontSize="large"/>
                        </Fab>
                        </Box>
                      
                    </div>
                        <ul>
                            <li><button className="home"><a>Home</a></button></li>
                            <li className="hoverable"><a>Art</a></li>
                            <li  className="hoverable"><a>Community</a></li>
                            <li  className="hoverable"><a>Blog</a></li>
                            <li className="hoverable"><a>Search</a></li>
                            <li><button className="wallet">Connect Wallet</button></li> 
                        </ul>
                    </div>
                </div>
        </div>
        <div className="burger">
            <span><h2>OpenART</h2></span>
            <Box onClick={handleSomethin} sx={{ ml: "2rem", mt: 1 }}  >
            <ToggleButton  value="right" key="right">
                    <FormatAlignRightIcon   />
                </ToggleButton>
            </Box>
        </div>
        </nav>
        </>
    )
}

