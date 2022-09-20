import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IUser } from '../interfaces';
// import { IUser, user } from '../interfaces';

const create = async (user: IUser): Promise<ResultSetHeader> => {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  // console.log('<><><><><><<>< RESULT MODEL - ', result);
  // const { insertId: id } = result;

  // const newuser: user = { ...user, id };
  // return newuser;
  return result;
};

// const findAll = async (): Promise<ResultSetHeader> => {
//   const query = 'SELECT * from Trybesmith.users';
//   const [result] = await connection.execute<ResultSetHeader>(query);
//   // console.log('<><><><><><<>< RESULT - ', result);
//   return result;
// };

const usersModel = { create };
// const usersModel = { create, findAll };

export default usersModel;
