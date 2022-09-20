import { ResultSetHeader } from 'mysql2';

import connection from './connection';

const findAll = async (): Promise<ResultSetHeader> => {
  const query = `
    SELECT
      O.id,
      O.userId,
      JSON_ARRAYAGG(P.id) AS productsIds
    FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P
    ON O.id = P.orderId
    GROUP BY O.id
    ORDER BY O.userId`;
  // JSON_ARRAYAGG aggregate function as seen on documentation page on the given link:
  // https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg

  const [orders] = await connection.execute<ResultSetHeader>(query);
  
  // console.log('<><>>>><><><><><><>< ORDERS MODEL - ', orders);
  return orders;
};

const ordersModel = { findAll };

export default ordersModel;
