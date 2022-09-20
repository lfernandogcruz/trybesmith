import express from 'express';

import productsController from '../controllers/productsController';
import { newProductAmountValidation,
  newProductNameValidation } from '../middlewares/newProductBodyValidation';

const productsRoute = express.Router();

productsRoute.post(
  '/',
  newProductNameValidation,
  newProductAmountValidation,
  productsController.create,
);
productsRoute.get('/', productsController.findAll);

export default productsRoute;
