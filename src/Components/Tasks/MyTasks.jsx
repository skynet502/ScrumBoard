import React,{useState, useEffect} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const MyTasks = ({data, deleteTask}) => {

    const [dailyTasks, setDailyTasks]= useState([])
    const [weeklyTasks, setWeeklyTasks]= useState([data])


    useEffect(() => {
        setWeeklyTasks(data)
    }, [data]);

    const handleonDragEnd = result => {
        if(!result.destination){
            return
        }

        if(result.source.droppableId === result.destination.droppableId){
            if(result.source.droppableId === 'weekly'){
                let tempWeeklyTasks = Array.from(weeklyTasks);
                const[reorderedcontent] = tempWeeklyTasks.splice(result.source.index, 1);
                tempWeeklyTasks.splice(result.destination.index, 0, reorderedcontent);

                setWeeklyTasks(tempWeeklyTasks)
            }else{
                let tempDailyTasks = Array.from(dailyTasks);
                const [reorderedcontent] = tempDailyTasks.splice(result.source.index,1);
                tempDailyTasks.splice(result.destination.index,0, reorderedcontent);
                setDailyTasks(tempDailyTasks);
            }
        }else{
            let tempWeeklyTasks = weeklyTasks;
            let tempDailyTasks = dailyTasks;
            if(result.source.droppableId === 'weekly'){
                const [removed] = tempWeeklyTasks.splice(result.source.index,1);
                tempDailyTasks.splice(result.destination.index, 0, removed);
                setWeeklyTasks(tempWeeklyTasks);
                setDailyTasks(tempDailyTasks)
            }else{
                const [removed] = tempDailyTasks.splice(result.source.index,1);
                tempWeeklyTasks.splice(result.destination.index, 0, removed);
                setWeeklyTasks(tempWeeklyTasks);
                setDailyTasks(tempDailyTasks)
            }
        }
        // const { destination } = result;
        // if(result.destination) return;
        // const contents=Array.from(taskRoll);
        // const [reorderedcontent]= contents.splice(result.source.index, 1);
       

        // setTaskRoll(contents)
    }

    

  return (
    <div className='tasker'>
      <DragDropContext onDragEnd={handleonDragEnd}>
      <div className='container'>

            <Droppable droppableId='weekly'>
            {(provided, snapshot)=>(
              
              <div className='weekly box' 
                 {...provided.droppableProps}
                    // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white' }}
                     ref={provided.innerRef}>

                    <h3>Weekly Task</h3>
                    {data.map(({id, content},index)=>{
                        return(
                            <Draggable key={id} draggableId={`${id}`} index={index}>
                            {(provided)=>(
                                <div key={id}  
                                {...provided.draggableProps}
                                {...provided.dragHandleProps} 
                                ref={provided.innerRef}>
                                <p className='task' style={{position:'relative', zIndex:'5'}} onClick={()=>{deleteTask(id)}}>
                                    {content}
                                </p>
                               
                                
                                </div>
                            )}
                            </Draggable>
                        )
                        
                    })}
               
                {provided.placeholder}  
                </div>
                
              )}
            </Droppable>
            
            <Droppable droppableId='daily'>
            {(provided,snapshot)=>(
                
                <div className='daily box' 
                {...provided.droppableProps}
                // style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'white' }}
                 ref={provided.innerRef} >
                    <h3>Daily Task</h3>
                    {dailyTasks.map(({id, content},index)=>{
                        return(
                            <Draggable key={id} draggableId={`${id}`} index={index}>
                            {(provided)=>(
                                <div key={id}  
                                {...provided.draggableProps}
                                {...provided.dragHandleProps} 
                                ref={provided.innerRef}>
                                <p className='task' >
                                    {content}
                                </p>
                                </div>
                            )}
                            </Draggable>
                        )
                        
                    })}
               
                {provided.placeholder}  
            </div>
            )}
            </Droppable>
        </div>
      </DragDropContext>

    </div>
  )
}

export default MyTasks