import Task from './Task'
 const Tasks = ({tasks, onDelete }) => {


  return ( 
    <>
      {tasks.map((task) => {
        return <Task key = {task.number} task = {task} onDelete = {onDelete}/>
      })}  
    </>
  )
}

export default Tasks;
