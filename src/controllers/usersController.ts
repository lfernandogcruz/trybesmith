import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import usersService from '../services/usersService';

const create = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const result = await usersService.create(user);
  if (!result) return res.status(500).json({ message: 'Internal Server Error' });
  const { authorization } = req.headers;
  return res.status(201).json({ token: authorization });
};

// const findAll = async (req: Request, res: Response) => {
//   const users = await usersService.findAll();
//   return res.status(200).json(users);
// };

const usersController = { create };
// const usersController = { create, findAll };

export default usersController;