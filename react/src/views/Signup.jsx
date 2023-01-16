import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit} action="">
            <h1 className='title'>
              SignUp into your Account
            </h1>
            <input type="text" placeholder='Full Name'/>
            <input type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button className='btn btn-block'>Sign Up</button>
            <div className="message">
              Already Registered? <Link to="/login">Sign in</Link>
            </div>
        </form>
      </div>
    </div>
  )
}
