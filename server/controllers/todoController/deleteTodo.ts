import express, { Response, Request, NextFunction } from "express";

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("DElete Todos");
  } catch (err) {
    next(err);
  }
};
