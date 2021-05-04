import React, {useState} from 'react'
import { Link } from 'react-router-dom';


export default function LoginForm({Login, error}) {
  const [details , setDetails] = useState({email:"", password:""});
  const handleSubmit = e =>{
      e.preventDefault();
      Login(details)

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="key">API key</label>
        <input type="text" id="key" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
        
      </div>
      <div>
        <label htmlFor="secret">secret</label>
        <input type="text" id="secret" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
      </div>
      <input type="submit" value="login"/>  
    </form>
  )
}
