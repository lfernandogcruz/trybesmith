import { IProduct } from '../interfaces';
import productsModel from '../models/productsModel';
import HttpException from '../helpers/http.exception';

const isValid = (product: IProduct) => {
  if (!product.name || typeof product.name !== 'string') return false;
  if (!product.amount || typeof product.amount !== 'string') return false;
  return true;
};

const create = async (product: IProduct) => {
  if (!isValid(product)) {
    throw new HttpException(400, 'Dados inválidos!');
  }
  const { insertId } = await productsModel.create(product);
  const newProduct = { ...product, id: insertId };

  return newProduct;
};

const productsService = { create };

export default productsService;
