import React, { Component } from 'react'
import './User.css'

export class Users extends Component {

    constructor(){
        super()

        this.state={
            users:[],
            loading:true
            
        }
    }


  render() {
    return 
    (
      <div>Users</div>
    )
  }
}


export default Users