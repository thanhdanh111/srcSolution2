import React,{useEffect, useState, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import slider1 from '../imgaes/slider/slide-01.jpg'
import slider2 from '../imgaes/slider/slide-02.jpg'
import slider3 from '../imgaes/slider/slide-04.jpg'
import RubberBand from 'react-reveal/RubberBand';
import './Page1.css'
export default function Page1() {
    return (
        <div className="page2-container">
            
            <div className="slider-content">
            <RubberBand>
                <div className="content-wrap">
                   <h4>KlassyCafe</h4>
                   <h6>THE BEST EXPER</h6>
                   <Link to='/product'><button ><span>More</span></button></Link>
                </div>
                </RubberBand>
            </div>
            
            <div className="slider-container">
                <img src={slider1} alt="asdas" />
            </div>
        </div>
    )
  
}
