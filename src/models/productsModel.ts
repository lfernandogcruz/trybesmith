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
  // console.log('<><><><><><<>< RESULT - ', result);
  // const { insertId: id } = result;

  // const newProduct: Product = { ...product, id };
  // return newProduct;
  return result;
};

const findAll = async (): Promise<ResultSetHeader> => {
  const query = 'SELECT * from Trybesmith.Products';
  const [result] = await connection.execute<ResultSetHeader>(query);
  // console.log('<><><><><><<>< RESULT - ', result);
  return result;
};

const productsModel = { create, findAll };

export default productsModel;
