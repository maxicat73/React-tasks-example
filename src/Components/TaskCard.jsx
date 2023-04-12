import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ tasks }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-slate-900 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tasks.title}</h1>
      <p className="text-gray-500 text-sm">{tasks.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(tasks.id)}
      >
        {" "}
        Eliminar Tarea
      </button>
    </div>
  );
};

export default TaskCard;
