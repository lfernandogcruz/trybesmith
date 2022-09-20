import ordersModel from '../models/ordersModel';

const findAll = async () => {
  const orders = await ordersModel.findAll();
  return orders;
};

const ordersService = { findAll };

export default ordersService;
