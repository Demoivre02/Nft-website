import React from "react";

export default function Home(){
    return(
        <>
        <div id="home">
            <div className="left">
                <h2>Discover, sell and create Non-Fungible Tokens</h2>
                <p>Buy, sell and mint NFTS from the World's most popular artists.</p>
                <span><p>Learn more</p> </span>
                    <div className="buttons">
                        <button className="Explore"> Explore</button>
                        <button className="Create"> create</button>
                    </div>
                    <div  className="table">
                        <table  className="center">
                        <thead>
                                <th>312447</th>  
                                <th>215467</th>  
                                <th>225678</th>    
                        </thead>  
                        <tbody>
                                <td>Collectors</td>
                                <td>Artworks</td>
                                <td>Auctions</td>
                        </tbody>
                        </table>
                    </div> 
            </div>
            <div className="right">
                <div className="img-container">
                    <img className="left-img" src="/images/left.jpg"/>
                    <img className="right-img" src="/images/right.webp"/>
                    <img  className="front" src="/images/front.jpg"/>
                   </div>
                    <div className="collectors">
                        <p>Top Collectors</p>
                        <div className="coll-img">
                            <img className="small" src="/images/collector1.png" />
                            <img className="small" src="/images/collector2.png" />
                            <img className="small" src="/images/collector3.png" />
                            <img className="small" src="/images/collector4.png" />
                            <img className="small" src="/images/collector5.png" />
                            <img className="small" src="/images/collector6.png" />
                            <img className="small" src="/images/collector7.png" />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}