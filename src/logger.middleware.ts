import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  // console.log(`Request...`, req.url, req.method);
  next();
};