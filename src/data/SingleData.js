import React from 'react'
import Image from './Image'
import Fade from 'react-reveal/Fade'

export default function SingleData({result}) {
    return (
     <>
            {
                result.map(item =>{
                    return (
                        <Fade left>
                            <Image key={item.id} result={item} />
                        </Fade>
                    )
                })
            }
            </>
    )
}
