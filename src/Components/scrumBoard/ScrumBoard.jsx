import React, { Component } from 'react'
import Data from '../../static/data'
import formInput from '../../static/formData'
import './ScrumBoard.css'
import NavBar from './../nav copy/Navbar';
import MyTasks from '../Tasks/MyTasks';

export class ScrumBoard extends Component {

  constructor(){
    super()
    
    this.state={
        data:formInput,
        isOpen:false,
        tasks:null
    }
  }

  openModal=()=>{
    this.setState({
        isOpen:true
    })
  }

  closeModal=()=>{
    this.setState({
        isOpen:false
    })
  }

  handleChange=(e)=>{
    this.setState({
        tasks:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
        isOpen:false
    })
  }



  render() {
    console.log('logged in as ', Data.fullname)

    return (
      <div className='scrumboard'>
      <NavBar />
        <nav>
            <h1>CHATSCRUM</h1>
            <div className='var'>
                <p>User Type: {Data.usertype}</p>
                <p>Project Name:{ Data.projectname}</p>
            </div>
        </nav>

        <p id='info'>Hello {Data.fullname}, Welcome to your scrumboard</p>

        <MyTasks />

        <div id='modal' className={this.state.isOpen ? "show" : "hidden"}>
            <div className='header'>
                <h3>Add a new task</h3>
                <h3 id='close' onClick={()=>this.closeModal()}>X</h3>
            </div>

            <form onSubmit={this.handleSubmit}> 
                <input type='text' onChange={this.handleChange} />
                <button>Confirm</button>
            </form>
        </div>
        <button className='add' onClick={() => this.openModal()}>ADD TASK</button>
      </div>
    )
  }
}

export default ScrumBoard