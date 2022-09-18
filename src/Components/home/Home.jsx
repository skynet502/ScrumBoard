import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { images } from '../../Constants'
import NavBar from '../nav/Navbar'

const Home = () => {
  return (
    <div className='home'>
    <NavBar />
      <div className='first'>
        <h2>Welcome to<br /> <span>CHATSCRUM</span></h2>
        <p>Collaborate, manage projects, and reach new productivity<br /> peaks.
        from high rise to the hoime office, the way your team<br /> works is 
        uniquue-accomplish it all with Chatscrum</p>
        <div className='Form' style={{display:'flex'}}>
        <input type='email' name='email' /><Link to='/signup'><button className='Homebutton'>Sign up here</button></Link>
        </div>
      </div>
        <div className='image'>
        <img src={images.HomeImage} />
        </div>
    </div>
  )
}

export default Home