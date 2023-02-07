import { Response, Request, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorStatus = err.status || 500;
  const errorMESSAGE = err.message || "Something wnet wrong";
  return res.status(errorStatus).json({
    sucess: false,
    message: errorMESSAGE,
    status: errorStatus,
    stack: err.stack,
  });
};
