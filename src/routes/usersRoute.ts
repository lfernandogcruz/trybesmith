import express from 'express';

import usersController from '../controllers/usersController';

import { newUserLevelValidation, newUserPasswordValidation,
  newUserNameValidation, newUserClassValidation } from '../middlewares/newUserBodyValidation';
import tokenGenerator from '../middlewares/tokenGenerator';

const usersRoute = express.Router();

usersRoute.post(
  '/',
  newUserLevelValidation,
  newUserPasswordValidation,
  newUserNameValidation,
  newUserClassValidation,
  tokenGenerator,
  usersController.create,
);
// usersRoute.get('/', usersController.findAll);

export default usersRoute;
