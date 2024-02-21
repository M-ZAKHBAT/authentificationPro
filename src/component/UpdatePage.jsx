// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// function UpdatePage() {
//   const { id } = useParams();
//   const [values, setValues] = useState({
//     Titre: "",
//     Priorite: "NORMAL",
//     Statut: "TODO",
//     deadline: "",
//   });

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get(`http://localhost:4000/tasks/`);
//       console.log("Fetched Tasks Data:", response.data);
//       // Vous pouvez définir des tâches ici si nécessaire
//     } catch (error) {
//       console.error("Error fetching tasks:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const handleUpdate = (event) => {
//     event.preventDefault();
//     axios
//       .put(`http://localhost:4000/tasks/${id}`, values)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => console.log(error));
//     window.history.back();
//   };

//   return (
//     <>
//       <form onSubmit={handleUpdate}>
//         <div className="input-container flex flex-col gap-y-3 text-black bg-white p-10 rounded w-[500px] h-auto relative">
//           <p className="text-center font-medium text-3xl">Update A Task :</p>
//           <label className="input-title">Titre:</label>
//           <input
//             type="text"
//             name="Titre"
//             className="input"
//             value={values.Titre}
//             onChange={(e) => setValues({ ...values, Titre: e.target.value })}
//           />
//           <label className="input-title">Priorite :</label>
//           <select
//             name="Priorite"
//             className="text-black border-black border h-12"
//             value={values.Priorite}
//             onChange={(e) => setValues({ ...values, Priorite: e.target.value })}
//           >
//             <option value="URGENT">URGENT</option>
//             <option value="NORMAL">NORMAL</option>
//           </select>
//           <label className="input-title">Statut :</label>
//           <select
//             name="Statut"
//             className="text-black border-black border h-12"
//             value={values.Statut}
//             onChange={(e) => setValues({ ...values, Statut: e.target.value })}
//           >
//             <option value="{values.Statut}">TODO</option>
//             <option value="{values.Statut}">INPROGRESS</option>
//             <option value="{values.Statut}">DONE</option>
//           </select>
//           <label className="input-title">Deadline:</label>
//           <textarea
//             name="deadline"
//             cols="10"
//             rows="6"
//             className="textarea"
//             value={values.deadline}
//             onChange={(e) => setValues({ ...values, deadline: e.target.value })}
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-orange-400 hover:bg-green-600 text-white font-bold  rounded"
//           >
//             <span>SAVE</span>
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default UpdatePage;
