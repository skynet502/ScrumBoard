import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
        <h2>WELCOME TO CHATSCRUM</h2>
        <div className='links'>
           <Link to='/signup'><h4>SIGN UP</h4></Link>
            <Link to='/signin'><h4>SIGN IN</h4></Link>
        </div>
    </div>
  )
}

export default Home