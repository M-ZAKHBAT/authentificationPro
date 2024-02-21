import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TasksPage() {
  // Si vous n'utilisez pas `task` de `useParams` pour filtrer ou effectuer une action spécifique, vous pourriez ne pas avoir besoin de cette ligne.
  // const { task } = useParams(); // Commentez ou retirez si inutilisé.
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Corrigé la syntaxe de la chaîne de requête
        const response = await axios.get("http://localhost:4000/tasks");
        console.log("Fetched Tasks Data:", response.data);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
    // Suppression de `id` du tableau de dépendances puisqu'il n'est pas défini
  }, []); // Si vous aviez l'intention d'utiliser une variable pour recharger les tâches, assurez-vous qu'elle soit définie et utilisée correctement ici.

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
      <button
        // onClick={addTask} // Commenté puisque la fonction `addTask` est commentée et non définie dans ce code corrigé.
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Task
      </button>
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>

      {/* Décommentez et ajustez ce code pour afficher correctement vos tâches */}
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task, i) => (
          <div
            className="flex items-center justify-between border rounded-md p-4"
            key={i}
          >
            <div>
              <label>Titre:</label>
              <h3>{task.Titre}</h3>
              <div>Description: {task.Description}</div>
              <div>Deadline: {task.deadline}</div>
              <div>Statut: {task.Statut}</div>
            </div>
            <div>
              <Link
                to={`/update/${task.id}`}
                className="bg-yellow-400 text-white px-2 py-1 rounded-md"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
