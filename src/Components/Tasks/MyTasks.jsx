import React from 'react'
import taskList from '../../static/tasks'

const MyTasks = () => {
  return (
    <div className='tasker'>
                <div className='container'>
            <div className='weekly box'>
                <h3>Weekly Task</h3>
                {taskList.map(({id,item},index)=>{
                    return(
                    <p className='task' key={id}>
                        {item}
                    </p>
                    )
  
                })}
            </div>
            <div className='daily box'>
                <h3>Daily Target</h3>
            </div>
        </div>
    </div>
  )
}

export default MyTasks