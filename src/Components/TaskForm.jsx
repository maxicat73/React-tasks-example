import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//funcion que utiliza un useState para agregar un titulo a traves del form
const TaskForm = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="escribir tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <button className="bg-indigo-500 px-1 py-1 text-white hover:bg-indigo-200">Añadir</button>
      </form>
    </div>
  );
};

export default TaskForm;
