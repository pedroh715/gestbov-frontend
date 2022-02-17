import React, { useState } from 'react'
import './styles.css'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", {email, password})
  } 

  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>

        <div className="field">
          <input 
          type="email" 
          name='email' 
          id='email' 
          placeholder='Insira seu email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          />
        </div>

        <div className="field">
          <input 
          type="password" 
          name='password' 
          id='password' 
          placeholder='Insira sua senha' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          />
        </div>

        <div className="actions">
          <button type='submit'>Login</button>
        </div>

      </form>
    </div>
  )
}

export default LoginPage