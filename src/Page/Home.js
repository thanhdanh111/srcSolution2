import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../component/Navbar';
import Page1 from '../component/Page1';
import Page1Container from '../component/Page1Container';
import Page2 from '../component/Page2';
export default function Home() {
    return (
        <div>
            <Page1 />
            <Page2 /> 
            <Page1Container />
        </div>
    )
}
