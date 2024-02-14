import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import Modal from "./ModalPage";

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchTasks(); // Au chargement du composant, récupérer Tasks depuis le backend
  }, []);

  // Fonction pour récupérer toutes les tâches depuis le backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/tasks");
      console.log("Fetched Tasks Data:", response.data);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const addTask = async () => {
    setIsModalOpen(true);
  };

  const handleAddTask = async (newTask) => {
    try {
      console.log("New Task Data:", newTask);
      const taskData = {
        Titre: newTask.Titre,
        Priorite: newTask.Priorite,
        Statut: newTask.Statut,
        Description: newTask.Description,
        deadline: newTask.deadline,
        Commentaires: newTask.Commentaires,
        // userId: newTask.userId, // Si présent, assurez-vous qu'il est correctement formaté
      };
      const response = await axios.post(
        "http://localhost:4000/tasks",
        taskData
      );
      setTasks([...tasks, response.data]);
      console.log(response.data);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const updateTask = async (id, updatedTaskData) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/tasks/${id}`,
        updatedTaskData
      );
      setTasks(tasks.map((task) => (task._id === id ? response.data : task))); // Mettre à jour la tâche modifiée dans la liste des tâches
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id)); // Supprimer la tâche de la liste des tâches
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    // Autres actions à effectuer lors de la déconnexion
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleLogout}
        className="text-sm text-[#060606] font-semibold hover:underline"
      >
        Logout
      </button>
      <Modal
        isOpen={isModalOpen}
        onAddTask={handleAddTask}
        onClose={handleCloseModal}
      >
        <p>Modal Content Goes Here</p>
      </Modal>
      {/* <Modal
        isOpen={isModalOpen}
        onAddTask={handleAddTask}
        onClose={handleCloseModal}
        // userId={userId} // Assurez-vous de passer l'userId ici
      >
        <p>Modal Content Goes Here</p>
      </Modal> */}
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>

      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Task
      </button>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            // username={task.username}
          />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
