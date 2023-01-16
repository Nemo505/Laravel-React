import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit} action="">
            <h1 className='title'>
              
              Login into your Account
            </h1>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
            <button className='btn btn-block'></button>
            <div className="message">
              Not Registered? <Link to="/signup">Create an Account</Link>
            </div>
        </form>
      </div>
    </div>
  )
}
