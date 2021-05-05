import React from 'react'
import defaultIMG from '../laptop1.jpg'
export default function SingleImage({images}) {
    const {large} =images

    return (
        <>
            {
                large ?
                <img src={large} alt="asdsa" style={{width:"500px",height:"500px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} /> 
                :
                null
            }
        </>
    )
}
