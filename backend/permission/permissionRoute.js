import express from "express";
import { PermissionController } from "./controllers/permission.controller.js";

export const route = express();
route.use(express.json());

const permissionController = new PermissionController();

//addOne
route.post("/register", async (req, res) => {
  try {
    const { body } = req;
    const result = await permissionController.Add(body);
    if (result) res.status(201).json(result);
    else res.status(404).json();
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

//updateOne
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const result = await permissionController.update({ _id: id }, body);
    if (result) res.status(200).json(result);
    else res.status(404).json();
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

//getOne
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await permissionController.getOne({ _id: id });
    if (result) res.status(200).json(result);
    else res.status(404).json();
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

//getAll
route.get("/", async (req, res) => {
  try {
    const result = await permissionController.getAll();
    if (result) res.status(200).json(result);
    else res.status(404).json();
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});

//deleteOne
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await permissionController.delete({ _id: id });
    if (result) res.status(200).json(result);
    else res.status(404).json();
  } catch (err) {
    console.error(err);
    res.status(500).json();
  }
});
