import express from "express";
import { UserController } from "./controllers/user.controller.js";

export const route = express();
route.use(express.json());

const userController = new UserController();

// const sanitize = (item) => {
//   const { password, salt, ...user } = item;
//   return user;
// };
//AddOne
route.post("/register", async (req, res) => {
  try {
    const { body } = req;
    // console.log({ body });
    const result = await userController.Add(body);
    if (result) res.status(201).json(result);
    else res.status(404).json({ msg: "erreur" });
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

// Middleware pour vérifier le rôle d'administrateur
// const checkAdminRole = (req, res, next) => {
//   console.log("middleware", req.user);
//   if (req.user?.role === "ADMIN") {
//     next();
//   } else {
//     res.status(403).json({ msg: "Forbidden resource" });
//   }
// };

// route.use(checkAdminRole);

// getAll
route.get("/", async (req, res) => {
  try {
    // const { page, limit, filter } = req.query;
    const result = await userController.getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// getOne
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userController.getOne(id);
    if (result) res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//updateOne
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const result = await userController.update(id, body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (err) {
    console.error(res.status(500).json(err));
  }
});

//delete
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userController.delete(id);
    if (result) res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
