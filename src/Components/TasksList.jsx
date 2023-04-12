
import TaskCard from './TaskCard';
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

//lista de tareas que se muestran en el HTML
function TaskList() {
 
  const {tasks}=useContext(TaskContext)

  if (tasks.length === 0) {
    return <div className='text-white text-4xl font-bold text-center'>No hay tareas aun</div>;
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((tasks) => (
       <TaskCard key={tasks.id} tasks={tasks}/>
      ))}
    </div>
  );
}

export default TaskList;
