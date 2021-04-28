import React from 'react'
import './Page1Container.css'
import iphone1 from "../imgaes/iphone/iphone1.jpg";

import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';


export default function Page1Container() {
    return (
        <div className="thanhdanh">
            <div className="thanhdanh-container">
                <div className="thanhdanh-content">
                     <h1>Hello, we are Gymso</h1>
                     <p>You are NOT allowed to redistribute this HTML template downloadable ZIP file on any template collection site. You are allowed to use this template for your personal or business websites.

If you have any question regarding Gymso Fitness HTML template, you can contact Tooplate immediately. Thank you.</p>
                </div>
            </div>
            <div className="thanhdanh-container">
                <Fade top>
                <div className="thanhdanh-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img  variant="top" src={iphone1} style={{height:"280px",width:"100%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}} />
                    <Card.Body>
                    <Card.Title className="title"><h1>iphone</h1></Card.Title>
                        
                        <Button variant="primary" className="thanhdanh-btn">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                </Fade>
                <Fade bottom>
                <div className="thanhdanh-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={iphone1}style={{height:"280px",width:"100%",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}/>
                    <Card.Body>
                    <Card.Title className="title"><h1>iphone</h1></Card.Title>
                       
                        <Button variant="primary" className="thanhdanh-btn">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                </Fade>
            </div>
        </div>
    )
}
