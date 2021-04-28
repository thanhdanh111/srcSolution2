import React,{useEffect,useContext, useState,useRef} from 'react'
import { Link, useLocation , useParams, useRouteMatch} from "react-router-dom";
import { DevicesContext } from '../context'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Display.css'
export default function DisplayPruct() {
    const {devices} = useContext(DevicesContext)
    const [current, setCurrent] = useState(0);
    const length = devices.length;
    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(devices) || devices.length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {devices.map((device, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
                <>
              <img style={{width:"600px",height:"400px",marginLeft:"30%",marginTop:"5%"}} src={device.images[0]} alt='travel image' className='image' />
              <div className="display-btn" style={{ width:"100%"}}>
                        <Link to={`/product/${device.slug}`} ><button>More</button></Link>
              </div>
              </>
            )}
            
          </div>
        );
      })}
    </section>
    )
}
