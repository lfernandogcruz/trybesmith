import { IProduct } from '../interfaces';
import productsModel from '../models/productsModel';

const create = async (product: IProduct) => {
  const { insertId } = await productsModel.create(product);
  const newProduct = { ...product, id: insertId };
  return newProduct;
};

const findAll = async () => {
  const products = await productsModel.findAll();
  return products;
};

const productsService = { create, findAll };

export default productsService;
