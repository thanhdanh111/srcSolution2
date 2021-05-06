
import './App.css';
import React, {useEffect, useState} from 'react'
import {auth , db} from './components/firebase'
import LoginDemo from './components/LoginForm';
import Afterlogin from './data/Afterlogin';
import {Switch , Route } from 'react-router-dom'
const key = "v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ"
const secret = "91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H"

function App() {
  const [user , setUser] = useState(auth)
  const [initializing , setInitializing] = useState(true)
  var storageKey = 'token';
    async function getTheToken  (){
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", key);
    params.append("client_secret", secret);
    const getToken = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params, 
        }
      );
      const data =  await getToken.json();
      localStorage.setItem(storageKey,data.access_token)
  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if(user){
            setUser(user);
            
        } else{

            setUser(null);
        }
        if(initializing){
            setInitializing(false)
        }
    })
    return unsubscribe;
},[]);
  useEffect(  () =>{
    getTheToken()
  },[])
  return (
   <>
     {
       user ? (
         <>
         <Switch>
         <Route  exact  path="/" component={Afterlogin}/>
         <Route  exact   component={Afterlogin}/>
         </Switch>
     
         </>
       )
       :
       (  
        <Switch>
        <Route  exact  path="/" component={LoginDemo}/>
        <Route  exact   component={LoginDemo}/>
        </Switch>
       )
     }

   </>
  );
}

export default App;
