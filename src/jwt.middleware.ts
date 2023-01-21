import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
      const token = req.headers.authorization;
      
      if (!token) {

      return res.status(401).send({ message: 'Token is required' });
    }

    try {
        
      const decoded = jwt.verify(token.split(" ")[1], "U6gt!WdEht6H:rF0KELs#DD7s@_NfJ/w2hp1h+Z!HIWB*LUKvU:ASpuAKQ2QM3sHew=)DF7ihD3Q-+Z5@l?=qyT:5qGG5ulkd=4y");
      next();
    } catch (error) {
      return res.status(401).send({ message: 'Token is invalid' });
    }
  }
}
