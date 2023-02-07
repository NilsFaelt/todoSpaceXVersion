import express, { Response, Request, NextFunction } from "express";

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send("Add Todos");
  } catch (err) {
    next(err);
  }
};
