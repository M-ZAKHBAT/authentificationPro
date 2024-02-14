import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Modal({ isOpen, onClose, onSaveTask, selectedTask }) {
  const [taskData, setTaskData] = useState(selectedTask || getDefaultTask());

  useEffect(() => {
    setTaskData(selectedTask || getDefaultTask());
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSaveTask(taskData);
    onClose();
  };

  function getDefaultTask() {
    const today = new Date().toISOString().split("T")[0];
    return {
      Titre: "",
      Priorite: "",
      Statut: "",
      Description: "",
      deadline: today,
      Commentaires: "",
    };
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-full max-w-lg p-6 mx-auto my-8 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center pb-4 border-b">
              <h3 className="text-xl font-semibold">
                {selectedTask ? "Edit Task" : "Add Task"}
              </h3>
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
              {/* Autres champs de saisie */}
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              >
                {selectedTask ? "Save Task" : "Add Task"}
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
  onSaveTask: PropTypes.func.isRequired,
  selectedTask: PropTypes.object, // Ajouter une prop pour les données de la tâche sélectionnée
};

export default Modal;


