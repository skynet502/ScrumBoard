import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../Constants'
import NavBar from '../nav/Navbar'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='signIn'>
        <NavBar />
        <div className='signinImage'>
            <video autoPlay muted src={images.business} type='video/mp4'></video>
        </div>
    <div className='form'>
        <h3 className='sub-title'>Sign in here</h3>

        <form>
            <label for='email'>Email</label>
                <input name='email' type='email' />
            <label for='password'>password</label>
                <input name='password' type='password' />
            <label for='text'>Project Name</label>
                <input name='text' type='text' />

                <Link to='/scrumboard'><button>SIGN IN</button></Link>
        </form>
        <p className='p-tag'>Don't have an account ? <Link to='/signup'>sign up</Link></p>
    </div>

    </div>
  )
}

export default SignIn