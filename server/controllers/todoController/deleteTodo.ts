import express, { Response, Request, NextFunction } from "express";

export const deleteTodo = (req: Request, res: Response) => {
  res.send("DElete Todos");
};
