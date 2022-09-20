import { NextFunction, Request, Response } from 'express';
import HttpException from '../helpers/http.exception';
import { IUser } from '../interfaces';

const INVALID_DATA_ERR = 'Dados inválidos!';

const newUserBodyValidation = (req: Request, _res: Response, next: NextFunction) => {
  const user = req.body as IUser;
  if (!user.level) throw new HttpException(400, INVALID_DATA_ERR);
  if (!user.password) throw new HttpException(400, INVALID_DATA_ERR);
  if (!user.username) throw new HttpException(400, INVALID_DATA_ERR);
  if (!user.classe) throw new HttpException(400, INVALID_DATA_ERR);
  next();
};

export default newUserBodyValidation;
