import React,{useState,useEffect} from 'react'
import Image from './Image';
import SingleData from './SingleData';

export default function Showdata() {
    const [result , setResult]  =useState('')
    var storageKey = 'token';
    const access_token_store = localStorage.getItem(storageKey)
    const getData  = async () => {
        const petResults = await fetch(
          "https://api.petfinder.com/v2/animals",
          {
            headers: {
              Authorization: `Bearer ${access_token_store}`,
            },
          }
        );
        const data = await petResults.json()
        const animals = data.animals;
        setResult(animals)
        
      };
      useEffect(() =>{
          getData();
      },[])
      console.log(result);
      if(!result){
          return <h1>loading</h1>
      }
    return (
        <>
            <SingleData result={result} />
        </>
    )
}
