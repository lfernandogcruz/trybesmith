import express from 'express';

import productsController from '../controllers/productsController';
import newProductBodyValidation from '../middlewares/newProductBodyValidation';

const productsRoute = express.Router();

productsRoute.post('/', newProductBodyValidation, productsController.create);
productsRoute.get('/', productsController.findAll);

export default productsRoute;
