
import './App.css';
import React, {useEffect, useState} from 'react'
import LoginForm from './components/LoginForm';
import Afterlogin from './data/Afterlogin';
import {Switch , Route } from 'react-router-dom'

const key = "v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ"
const secret = "91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H"


function App() {

  var keyLogin = "login";

  var validate = localStorage.getItem(keyLogin)
  if(validate === null)
    validate = false
  const [user , setUser] = useState(validate)
  const [error , setError] = useState("")


  const Login = detail =>{
    console.log(detail);
    if(detail.email == key && detail.password== secret){
      localStorage.setItem(keyLogin,true)
      setUser(localStorage.getItem(keyLogin))
      console.log(user);
    }
    else{
      setError("Wrong Username or password")
    }
  }
  const Logout = () =>{
    setUser(localStorage.setItem(keyLogin,false))
    setUser(localStorage.getItem(keyLogin))
    console.log(user);
    
  }
//  ...... get token
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
  
  
  useEffect(  () =>{
    getTheToken()
  },[])
  return (
   <>
      {user === "true" ? (
        <Switch>
          <Route path="/" exact children={<Afterlogin Logout={Logout} />} />
          <Route  exact children={<Afterlogin Logout={Logout} />} />
        </Switch>
      )
    : (
      <Switch>
        <Route path="/" exact children={<LoginForm Login={Login}  error={error} />} /> 
        <Route  exact children={<LoginForm Login={Login} error={error}  />} /> 
      </Switch>
    )
    }
   </>
  );
}

export default App;
