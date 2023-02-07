import { Response, Request, NextFunction } from "express";
export const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("get users");
  } catch (err) {
    next(err);
  }
};
