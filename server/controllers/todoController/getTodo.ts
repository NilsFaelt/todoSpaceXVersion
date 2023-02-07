import express, { Response, Request, NextFunction } from "express";

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json("Get Todos");
  } catch (err) {
    next(err);
  }
};
