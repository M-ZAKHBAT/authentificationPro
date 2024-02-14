import express from "express";
import cors from "cors"; // Importez le middleware cors

import { ConnexionDb } from "./commun/connexiondb.js";
import { route as userRoute } from "./users/routeUser.js";
import { route as authRoute } from "./authentification/authRoute.js";
import { route as taskRoute } from "./tasks/taskRoute.js";
import { route as permissionRoute } from "./permission/permissionRoute.js";
import { route as roleRoute } from "./roles/roleRoute.js";
import { auth } from "./commun/auth.js";

const app = express();

// Ajoutez le middleware cors ici
app.use(cors());

app.use(express.json());
const port = 4000;
const database = new ConnexionDb();

// app.use('/', auth);

//roles
app.use("/roles", auth, roleRoute);
//permissions
app.use("/permission", auth, permissionRoute);
//taks
app.use("/tasks", taskRoute);
//users
app.use("/users", userRoute);
//middlewar
app.use("/auth", authRoute);

database.generateConnexion().then(
  app.listen(port, () => {
    console.log(`connected server at port : ${port}`);
  })
);
