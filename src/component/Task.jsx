import PropTypes from "prop-types";
import { useState } from "react";
function Task({ task, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, newTitle);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between border rounded-md p-4">
      {editing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full mr-2"
        />
      ) : (
        <div className="">
          <h3>{task.Titre}</h3>
          <div>{task.Description}</div>
          {/* <span className="mr-2">{JSON.stringify(task)}</span> */}
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
