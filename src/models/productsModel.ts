import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IProduct } from '../interfaces';
// import { IProduct, Product } from '../interfaces';

const create = async (product: IProduct): Promise<ResultSetHeader> => {
  const { name, amount } = product;

  const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  // const { insertId: id } = result;

  // const newProduct: Product = { ...product, id };
  // return newProduct;
  return result;
};

const productsModel = { create };

export default productsModel;
