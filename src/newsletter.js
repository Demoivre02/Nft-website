import React from 'react';
import "./newsletter.css"

function Newsletter() {
    return (
        <div className='news-body'>
            <div className='headings'>
                <h2>Never miss out on our</h2>
                <h2 className='sec'> Newsletters </h2>
            </div>
            <p className='news-para'>
                Become one of the first people 
                to know about new openART drops.
            </p>
            <form action='/' method='POST'>
                <input type="text" placeholder="Email Address"/>
                <button className="subscribe"> subscribe</button>
            </form>
        </div>
    );
}

export default Newsletter;