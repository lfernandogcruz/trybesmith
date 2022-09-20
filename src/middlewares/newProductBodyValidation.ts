import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/http.exception';
import { IProduct } from '../interfaces';

const INVALID_DATA_ERR = 'Dados inválidos!';

const newProductBodyValidation = (req: Request, _res: Response, next: NextFunction) => {
  const product = req.body as IProduct;
  if (!product.name) throw new HttpException(400, INVALID_DATA_ERR);
  if (!product.amount) throw new HttpException(400, INVALID_DATA_ERR);
  next();
};

export default newProductBodyValidation;