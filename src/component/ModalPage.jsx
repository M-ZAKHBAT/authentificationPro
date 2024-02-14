import PropTypes from "prop-types";
import { useState } from "react";

function Modal({ isOpen, onClose, onAddTask }) {
  const today = new Date().toISOString().split("T")[0];
  const [taskData, setTaskData] = useState({
    Titre: "",
    Priorite: "",
    Statut: "",
    Description: "",
    deadline: today,
    Commentaires: "",
    // userId: userId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = () => {
    onAddTask(taskData);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-lg p-6 mx-auto my-8 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center pb-4 border-b">
              <h3 className="text-xl font-semibold">Add Task</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="Titre"
                  className="block font-medium text-gray-700"
                >
                  Titre
                </label>
                <input
                  id="Titre"
                  type="text"
                  name="Titre"
                  value={taskData.Titre}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="Priorite"
                  className="block font-medium text-gray-700"
                >
                  Priorite
                </label>
                <input
                  id="Priorite"
                  type="text"
                  name="Priorite"
                  value={taskData.Priorite}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="Statut"
                  className="block font-medium text-gray-700"
                >
                  Statut
                </label>
                <input
                  id="Statut"
                  type="text"
                  name="Statut"
                  value={taskData.Statut}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="Description"
                  className="block font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  id="Description"
                  type="text"
                  name="Description"
                  value={taskData.Description}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block font-medium text-gray-700"
                >
                  deadline
                </label>
                <input
                  id="deadline"
                  type="date"
                  name="deadline"
                  value={taskData.deadline}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="Commentaires"
                  className="block font-medium text-gray-700"
                >
                  Commentaires
                </label>
                <input
                  id="Commentaires"
                  type="text"
                  name="Commentaires"
                  value={taskData.Commentaires}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        className={isOpen ? "opacity-25 fixed inset-0 z-40 bg-black" : "hidden"}
      ></div>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  // userId: PropTypes.string.isRequired,
};

export default Modal;
