import express, { Response, Request, NextFunction } from "express";
export const updateTodo = (req: Request, res: Response) => {
  res.send("Update Todos");
};
