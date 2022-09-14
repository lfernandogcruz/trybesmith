import express from 'express';

import productsController from '../controllers/productsController';

const productsRoute = express.Router();

productsRoute.post('/', productsController.create);

export default productsRoute;
