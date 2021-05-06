import React from 'react'
import Showdata from './Showdata'
import './AfterLogin.css'
import firebase from '../components/firebase'
export default function Afterlogin() {
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
    
  };
    return (
        <>
            <div className="welcome">
              <h2>WELCOME</h2>
              <a class="submit" onClick={signOut}>Sign Out</a>
            </div>
             <Showdata />
       </>
    )
}
