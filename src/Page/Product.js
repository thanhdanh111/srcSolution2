import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import DevicesContainer from '../component/DevicesContainer'
import ProducRelease from '../component/ProducRelease'
import {DevicesContext} from '../context'

export default function Product() {
    const {feature : devices } = useContext(DevicesContext)
    return (
        <>
            <DevicesContainer />
        </>
    )
}
