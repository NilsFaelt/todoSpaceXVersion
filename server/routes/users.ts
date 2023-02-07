import express, { Response, Request, NextFunction } from "express";
import { addUser, getUser } from "../controllers/users/index";

const router = express.Router();

router.get("/", getUser);
router.post("/addUser", addUser);

export default router;
