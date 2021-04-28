import { event } from "jquery";
import React, { useState,Component, useEffect} from "react";

import App from "./App";
import items from "./data";


const DevicesContext = React.createContext()
 function DeviceProvider(props) {
    const [devices , setDevices] = useState([])
    const [feature , setFeature] = useState([])
    const [sorted , setSorted] = useState([])
    const [type , setType] = useState('all')
    const [price , setPrice] = useState(0)
    const [minPrice ,setminPrice] = useState(0)
    const [maxPrice , setmaxPrice] = useState(0)
    useEffect(() =>{
        let devices = FormatData(items);
        let featuredRooms = devices.filter(device => device.featured === true);
        let maxPrice = Math.max(...devices.map(item => item.price));
        setDevices(devices)
        setFeature(featuredRooms)
        setSorted(devices)
        setmaxPrice(maxPrice)
    },[])
    const FormatData = (items) =>{
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let device = { ...item.fields, images, id };
            return device;
          });
          return tempItems;
    }
    const getRoom = slug => {
        let tempRooms = [...devices]
        const device = tempRooms.find(device => device.slug === slug);
        return device;
    };
    const handleChange = event =>{
        const target = event.target;
        const value = target.type === "checkbox"? target.checked : target.value;
        const name = event.target.name;
        setType(value)
       
    }
    const handleChangePrice = event =>{
        const target = event.target;
        const value = target.type === "checkbox"? target.checked : target.value;
        const name = event.target.name;
        setPrice(value)
    }
    const filerDevices = () =>{   
        
        let tempDevices = devices ;
        if (type !== "all") {
            tempDevices = tempDevices.filter(device => device.type === type);
        }
        tempDevices = tempDevices.filter(device => device.price <= price);
        setSorted(tempDevices)
    }

    return (
        <DevicesContext.Provider value={{
            devices,
            feature,
            type,
            minPrice,
            maxPrice,
            price,
            sorted,
            getRoom : getRoom,
            handleChange: handleChange,
            handleChange1:filerDevices,
            handleChangePrice:handleChangePrice
        }} >
            {props.chlidren}
           
            <App />
        </DevicesContext.Provider>
    )
}

const DevicesConsumer = DevicesContext.Consumer;
export { DeviceProvider , DevicesContext ,DevicesConsumer};

export function withDevicesConsumer(Component){
    return function ConsumerWrapper(props){
        return(
            
            <DevicesConsumer>
                {value => <Component {...props} context={value}/>}
            </DevicesConsumer>
        )
    }
}

