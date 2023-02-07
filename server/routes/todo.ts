import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoController/index";

const router = express.Router();
router.get("/", getTodos);
router.post("/add", addTodo);
router.delete("/delete", deleteTodo);
router.put("/update", updateTodo);

export default router;
