import { Response, Request, NextFunction } from "express";
export const getUser = (req: Request, res: Response) => {
  res.send("get users");
};
