import React from 'react'
import Devices from './Devices';
import  './DeviceList.css'

export default function DeviceList({devices}) {
    if (devices.length === 0) {
        return (
          <div>
            <h3 style={{textAlign:"center"}}>NOTHING</h3>
          </div>
        );
      }
    return (
      <div className="roomslist">
        <div className="roomslist-center">
            {devices.map(item =>{
                return <Devices key={item.id} device={item} />
            })}
        </div>
      </div>
    )
}
