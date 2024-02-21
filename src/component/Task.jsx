import PropTypes from "prop-types";
import { useState } from "react";

function Task({ task, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.Titre);
  const [newDeadline, setNewDeadline] = useState(task.deadline);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, newTitle, newDeadline);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between border rounded-md p-4">
      {editing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full mr-2"
          />
          <label className="input-title">Priorite :</label>
          <select
            name=""
            id=""
            className="text-black border-black border h-12"
            value={task.Priorite}
          >
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
          </select>
          <label className="input-title">Statut :</label>
          <select
            name=""
            id=""
            className="text-black border-black border h-12"
            value={task.Statut}
          >
            <option value="TODO">TODO</option>
            <option value="INPROGRESS">INPROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
          <input
            type="text"
            value={newDeadline}
            onChange={(e) => setNewDeadline(e.target.value)}
            className="w-full mr-2"
          />
        </div>
      ) : (
        <div className="">
          <label>Titre</label>
          <h3>{task.Titre}</h3>
          <div>{task.Description}</div>
        </div>
      )}

      <div>
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// Ajoutez la validation des props
Task.propTypes = {
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
