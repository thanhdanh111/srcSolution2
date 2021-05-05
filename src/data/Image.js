import React,{useState} from 'react'
import SingleImage from './SingleImage';
import './Image.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
export default function Image({result}) {
    const [current, setCurrent] = useState(0);
    
    const { name , photos,type } = result;
    const length = photos.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };
      // check  array of photos
      if (!Array.isArray(photos) || photos.length <= 0) {
        return null;
      }
      if ( photos.length === 1) {
        return(
            <div className="slider-container">
            <h1 style={{textAlign:"center"}} >{name}</h1>
            <div className="slider">
                {
                    photos.map((item, index) =>{
                        return (
                            <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                            >
                            {index === current && (
                                <SingleImage key={index} images={item} />
                            )}
                            </div>
                    )})
                        
                }
            </div>
        </div>
        )
      }
      
    return (
        <div className="slider-container">
            <h1 style={{textAlign:"center"}} >{name}</h1>
            <div className="slider">
          
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {
                    photos.map((item, index) =>{
                        return (
                            <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                            >
                            {index === current && (
                                <SingleImage key={index} images={item} />
                            )}
                            </div>
                    )})
                        
                }
            </div>
        </div>
    )
}
