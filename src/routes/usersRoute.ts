import express from 'express';

import usersController from '../controllers/usersController';

import newUserBodyValidation from '../middlewares/newUserBodyValidation';
import tokenGenerator from '../middlewares/tokenGenerator';

const usersRoute = express.Router();

usersRoute.post('/', newUserBodyValidation, tokenGenerator, usersController.create);
// usersRoute.get('/', usersController.findAll);

export default usersRoute;
