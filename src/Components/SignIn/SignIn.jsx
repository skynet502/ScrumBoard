import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='signIn'>
        <h2>Have an Account already ?</h2>
        <h3>Sign in here</h3>

        <form>
            <label for='email'>Email</label>
                <input name='email' type='email' />
            <label for='password'>password</label>
                <input name='password' type='password' />
            <label for='text'>Project Name</label>
                <input name='text' type='text' />

                <Link to='/scrumboard'><button>SIGN IN</button></Link>
        </form>
        <p>Don't have an account ? <Link to='/signup'>sign up</Link></p>
    </div>
  )
}

export default SignIn