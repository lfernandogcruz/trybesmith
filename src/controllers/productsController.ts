import { Request, Response } from 'express';
import { IProduct } from '../interfaces';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const newProduct = await productsService.create(product);
  return res.status(201).json(newProduct);
};

const findAll = async (_req: Request, res: Response) => {
  const products = await productsService.findAll();
  return res.status(200).json(products);
};

const productsController = { create, findAll };

export default productsController;
