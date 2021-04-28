import React,{useEffect,useContext, useState,useRef} from 'react'
import { useLocation , useParams, useRouteMatch} from "react-router-dom";
import { DevicesContext } from '../context'
import './DetailProduct.css'
import fast from '../imgaes/service/f1.png'
import good from '../imgaes/service/oke.png'
import LightSpeed  from 'react-reveal/LightSpeed';
export default function DetailProduct() {
    const {getRoom} = useContext(DevicesContext)
    const location =  useRouteMatch()

    const slug  = location.params.slug;
    const device = getRoom(slug)
    console.log(device);
    if(!device){
        return <h1>loading</h1>
    }
    const {
        name,
        description,
        capacity,
        price,
        images

        
      } = device;
      
    return (
        <div className="detail">
            <div className="detail-container">
                <div className="detail-content">
                    <div className="detail-title">
                        <h1>{name}</h1>
                    </div>
                    <div className="detail-btn">
                        <button><span>Buy now</span></button>
                    </div>
                    <div className="detail-services">
                        <div className="fast">
                            <img src={fast} />
                            <span>Fast Service</span>
                        </div>
                        <div className="fast">
                            <img src={good} />
                            <span>Fast Service</span>
                        </div>
                        <div className="fast">
                        <img src={fast} />
                            <span>Fast Service</span>
                        </div>
                    </div>
                </div>
            </div>
        <div className="detail-image">
            <LightSpeed right>
                <img src={images[0]} />
                </LightSpeed>
        </div>
        </div>
    )
}
