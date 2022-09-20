import { Request, Response, NextFunction } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

const JWT_SECRET = 'mySecretPassword';
const JWT_CONFIG: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const tokenGenerator = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe } = req.body as IUser;
  const token = jwt.sign({ username, classe }, JWT_SECRET, JWT_CONFIG);
  req.headers.authorization = token;
  next();
};

export default tokenGenerator;
