import React from 'react'
import  TaskList  from "./Components/TasksList";
import TaskForm from './Components/TaskForm';


const App = () => {


 

//funcion que recibe una prop (taskTitle) para crear una nueva tarea a partir del array tasks con el useState(utilizando setTask)
 
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
      </div>
    </main>
  )
}

export default App

