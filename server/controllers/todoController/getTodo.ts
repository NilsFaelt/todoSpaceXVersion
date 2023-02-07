import express, { Response, Request, NextFunction } from "express";

export const getTodos = (req: Request, res: Response) => {
  res.json("Get Todos");
};
