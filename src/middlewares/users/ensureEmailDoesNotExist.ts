import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database";
import { AppErrors } from "../../error";
import { TUserResponse } from '../../interfaces/users';

const ensureEmailDoesNotExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {

  const email: string = req.body.email;
  
  const query: string = `
  SELECT *
  FROM users
  WHERE email = $1
  `;
  
  const queryResult: QueryResult<TUserResponse> = await client.query(query, [email]);
  
  if (queryResult.rowCount > 0) {
    throw new AppErrors("E-mail already registered", 409);
  }

  return next();
};

export default ensureEmailDoesNotExist;
