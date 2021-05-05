import React from 'react'
import Showdata from './Showdata'
import './AfterLogin.css'
export default function Afterlogin({Logout}) {
    return (
        <>
            <div className="welcome">
              <h2>WELCOME</h2>
              <a class="submit" onClick={Logout} >Sign Out</a>
            </div>
             <Showdata />
       </>
    )
}
