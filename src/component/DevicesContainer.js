import React,{useContext} from 'react'
import { withDevicesConsumer } from "../context";
import {DevicesContext} from '../context'
import DeviceList from './DeviceList'
import Devices from './Devices'
import Filter from './Filter'
import Page1Container from './Page1Container';
 function DevicesContainer() {
    const  {devices,sorted}  = useContext(DevicesContext)
    return (
        <div>
            <Page1Container />
            <Filter Devices={devices}/>
            <DeviceList devices={sorted} />
        </div>
    )
}
export default withDevicesConsumer(DevicesContainer);