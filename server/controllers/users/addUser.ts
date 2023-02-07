import { Response, Request, NextFunction } from "express";
export const addUser = (req: Request, res: Response) => {
  res.send("add user");
};
