import express, { Response, Request, NextFunction } from "express";

export const addTodo = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Add Todos");
};
