import { NextFunction, Request, Response } from 'express';
import { IProduct } from '../interfaces';

export const newProductNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body as IProduct;
  if (!product.name) return res.status(400).json({ message: '"name" is required' });
  if (typeof product.name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (product.name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export const newProductAmountValidation = (req: Request, res: Response, next: NextFunction) => {
  const product = req.body as IProduct;
  if (!product.amount) return res.status(400).json({ message: '"amount" is required' });
  if (typeof product.amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  if (product.amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
};
