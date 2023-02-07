import express, { Response, Request, NextFunction } from "express";
export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Update Todos");
  } catch (err) {
    next(err);
  }
};
