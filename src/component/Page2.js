import React from 'react'
import './Page2.css'
import page1 from '../imgaes/page1/thanhdanh.webp'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';

export default function Page2() {
    return (
        <div className="page1-container">
           
            <div className="container">
                <Fade left>  
                <div className="container-image">
                <img src={page1} alt="thanhdanh" />
             
                </div>
                </Fade>
            <div className="container-content">
            <Fade right>
                <h1>SEO Friendly</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Nam pulvinar luctus sem, 
                    eget porta orci. Maecenas molestie dui id
                     diam feugiat, eu tincidunt mauris aliquam. 
                     Duis commodo vitae ligula et interdum. Maecenas
                      faucibus mattis imperdiet. In rhoncus ac ligula id 
                      ultricies.</p>
                <Link to='/productdisplay'><button><span>Hover me</span></button></Link>
                </Fade>
            </div>
            
            </div>
           
        </div>
    )
}
