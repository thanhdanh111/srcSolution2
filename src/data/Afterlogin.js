import React from 'react'
import Showdata from './Showdata'

export default function Afterlogin({Logout}) {
    return (
        <div>
            <div className="welcome">
          <h2>welcome</h2>
         
          <button onClick={Logout}>logout</button>
          <Showdata />

        </div>
        </div>
    )
}
