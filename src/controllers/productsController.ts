import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const newProduct = await productsService.create(product);
  return res.status(201).json(newProduct);
};

const productsController = { create };

export default productsController;
