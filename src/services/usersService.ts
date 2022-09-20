import { IUser } from '../interfaces';
import usersModel from '../models/usersModel';

const create = async (user: IUser) => {
  const { affectedRows } = await usersModel.create(user);
  if (affectedRows === 0) return false;
  return true;
};

// const findAll = async () => {
//   const users = await usersModel.findAll();
//   return users;
// };

const usersService = { create };
// const usersService = { create, findAll };

export default usersService;
