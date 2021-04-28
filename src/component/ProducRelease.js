import React,{useContext} from 'react'
import { DevicesContext } from '../context'
import DevicesContainer from './DevicesContainer';
export default function ProducRelease() {
    const  {devices}  = useContext(DevicesContext)
    console.log(devices);
    return (
        <div>
            <DevicesContainer devices={devices} />
        </div>
    )
}
