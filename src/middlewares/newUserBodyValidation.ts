import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces';

export const newUserLevelValidation = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as IUser;
  if (user.level === undefined || user.level === null) {
    return res.status(400).json({ message: '"level" is required' });
  }
  if (typeof user.level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (user.level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};

export const newUserPasswordValidation = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as IUser;
  if (!user.password) return res.status(400).json({ message: '"password" is required' });
  if (typeof user.password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (user.password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long' });
  }
  next();
};

export const newUserNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as IUser;
  if (!user.username) return res.status(400).json({ message: '"username" is required' });
  if (typeof user.username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (user.username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long' });
  }
  next();
};

export const newUserClassValidation = (req: Request, res: Response, next: NextFunction) => {
  const user = req.body as IUser;
  if (!user.classe) return res.status(400).json({ message: '"classe" is required' });
  if (typeof user.classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }
  if (user.classe.length < 3) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }
  next();
};
