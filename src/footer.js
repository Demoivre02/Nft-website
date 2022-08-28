import React from "react";
import "./footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';


export function Footer(){
    return(
        <>
        <div className=" footer">
            <div className="footer-container">
            <div className="right-footer">
               <h2><span>OpenART</span> </h2>
                <p className="footer__p">  
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Fuga magnam delectus,
                    iure, perspiciatis distinctio expedita 
                    mollitia alias nisi minus in labore ad vitae 
                    numquam voluptates dignissimos
                    modi ipsum quasi maxime.
                </p>
                <div className="footer-icon">
                    <TwitterIcon  sx={{color: "#40ffc7"}}/>
                    <InstagramIcon sx={{color: "#40ffc7"}}/>
                    <PinterestIcon  sx={{color: "#40ffc7"}}/>
                    <YouTubeIcon sx={{color: "#40ffc7"}}/>
                </div>
            </div>
            <div className="left-footer">
                <div className="tables">
                    <div className="footer-one">
                            <h3>About us</h3>
                        <ul className="ul">
                           <li className="li">Help</li>
                           <li className="li">reservation</li>
                           <li className="li">Programs and events</li>
                           <li className="li">Campaigns</li>
                        </ul>
                    </div>
                    <hr/>

                    <div className="footer-two">
                            <h3 className="contact">contact us</h3>
                        <ul className="ul">
                           <li className="li">Facebook</li>
                           <li className="li">Whatsapp</li>
                           <li className="li">Twitter</li>
                           <li className="li">Pintest</li>
                        </ul>
                    </div>
                    <hr/>
                    <div className="three">
                            <h3>Newsletters </h3>
                        <ul className="ul">
                           <li className="li">Subscribe</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}