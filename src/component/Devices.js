import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import './Devices.css'
function Devices({device}) {
    const { name, slug, images, price } = device;
    return (
        <>
         <div class="maincontainer">
             <div class="thecard">
            <div class="thefront">
              <img src={images[0]} alt="product"/>
              <h1>{name}</h1>
            </div>
            <div class="theback">
              <h5>{name}</h5>
             <Link to={`/product/${slug}`} ><button ><span>More</span></button></Link>
            </div>
            </div>
        </div>
        </>
    )
}
Devices.propTypes = {
    room: PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
  };
  export default Devices;
