import React from 'react'
import { useState } from 'react'
import Nav from "./nav"
import Home from "./home"
import Contents from './getstarted'
import Features from './featured'
import contArray from './content'
import Categories from './categories'
import Newsletter from './newsletter'
import { Footer } from './footer'



function App() {

    return(
      <>
        
        <Nav />
         <Home />
        <Features/>
        <div className='flex-content'>
          {contArray.map((item)=>{ 
            return(
            <Contents icon={item.icon} heading={item.heading} key={item.key} />
          )})}
        </div>
        <button className="Explore middle"> Get Started</button>
        <Categories />
        <Newsletter/>
        <Footer/>
      </>
    )
}

export default App;
