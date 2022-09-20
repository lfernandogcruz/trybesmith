import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const findAll = async (_req: Request, res: Response) => {
  const orders = await ordersService.findAll();
  return res.status(200).json(orders);
};

const ordersController = { findAll };

export default ordersController;
