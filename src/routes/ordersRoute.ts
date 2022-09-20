import express from 'express';

import ordersController from '../controllers/ordersController';

const ordersRoute = express.Router();

// ordersRoute.post('/', ordersController.create);
ordersRoute.get('/', ordersController.findAll);

export default ordersRoute;
