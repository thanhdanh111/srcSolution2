import React,{useContext} from 'react'
import {DevicesContext} from '../context'
import './Filter.css'
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
export default function Filter({Devices}) {
    console.log("1",Devices);
    const  context  = useContext(DevicesContext);
    const {handleChange1,handleChange, type,minPrice,
      maxPrice,price ,handleChangePrice} = context;
        
    let types = getUnique(Devices, "type");

    types = ["all", ...types];
    
    types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));
    return (
      
    <>
      <div className ="filter-container">
        <div className="filter-form">
          <div className="filter-group">
      <label htmlFor="type">room type</label>
      <select
        name="type"
        id="type"
        onChange={handleChange}
        className="form-control"
        value={type}
      >
        {types}
      </select>
      </div>
      <div className="filter-group">
      <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChangePrice}
            className="form-control"
          />
          </div>
          <div className="filter-from" style={{textAlign:"center"}}>
              <button onClick={handleChange1} ><span>Search</span></button>
          </div>
    </div>
    

      </div>
</>
    )
}
