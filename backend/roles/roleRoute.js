import express from "express";
import { RoleController } from "./controllers/role.controller.js";

export const route = express();
route.use(express.json());

const roleControle = new RoleController();

//addRole
route.post("/register", async (req, res) => {
  try {
    const { body } = req;
    const result = await roleControle.Add(body);
    if (result) res.status(201).json(result);
    else res.status(404).json({ message: "erreur" });
  } catch (err) {
    // console.log(err);
    res.status(500).json();
  }
});

// updateRole
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { item } = req;
    const result = await roleControle.update({ _id: id }, item);
    if (result) res.status(200).json(result);
    else res.status(404).json({ message: "erreur" });
  } catch (err) {
    // console.log(err);
    res.status(500).json();
  }
});

//getOneROle
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await roleControle.getOne({ _id: id });
    if (result) res.status(200).json(result);
    else res.status(404).json({ message: "erreur" });
  } catch (err) {
    // console.log(err);
    res.status(500).json();
  }
});

//getAllRoles
route.get("/", async (req, res) => {
  try {
    const result = await roleControle.getAll();
    if (result) res.status(200).json(result);
    else res.status(404).json({ message: "erreur" });
  } catch (err) {
    // console.log(err);
    res.status(500).json();
  }
});

//deleteOneRole
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await roleControle.delete({ _id: id });
    if (result) res.status(200).json(result);
    else res.status(404).json({ message: "erreur" });
  } catch (err) {
    // console.log(err);
    res.status(500).json();
  }
});
