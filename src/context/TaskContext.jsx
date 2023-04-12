
import { createContext } from 'react'
import { tasks as data } from "../tasks";
import { useState,useEffect } from 'react';


export const TaskContext = createContext();

export function TaskContextProvider(props){

  //useState y array de tareas(tasks) para utilizarlos desde APP y pasarselos a TaskForm y TaskList***
  const [tasks, setTask] = useState([]);
  function createTask(task){

    setTask([...tasks, {
      title:task.title,
      id:tasks.length,
      description:task.description
    }])

  }

  function deleteTask(taskId){
    setTask(tasks.filter(tasks=>tasks.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask

        }}>
             {props.children}
        </TaskContext.Provider>
           
        )
}
 



