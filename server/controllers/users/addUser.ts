import { Response, Request, NextFunction } from "express";
import { addUserPrisma } from "../../prisma/utils/addUserPrisma";

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await addUserPrisma();
    res.send("add user");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
