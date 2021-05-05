import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './Login.css'
export default function LoginForm({Login, error}) {
  console.log("saa",error);
  const [details , setDetails] = useState({email:"", password:""});
  const handleSubmit = e =>{
      e.preventDefault();
      Login(details)
  }
  return (
    <>
    <div className="main">
      <p className="sign" style={{alignItems:"center"}}>Sign in</p>
      {(error != "") ? (<p style={{textAlign:"center"}} >{error}</p>) : null}
      <form className="form1" onSubmit={handleSubmit}>
        <input class="un " type="text"  placeholder="Username" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}  />
        <input class="pass" type="password"  placeholder="Password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}  />
        <input className="submit" type="submit" style={{alignItems:"center"}} value="SUBMIT"/>
      </form>
    </div>
    </>
  )
}
