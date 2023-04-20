import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database";
import { AppErrors } from "../../error";
import { TEmailLogin } from "../../interfaces/session";
import { TUser } from "../../interfaces/users";

const ensureEmailExistsAndUserIsActive = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

  const { email }: TEmailLogin = req.body;

  if(!email) throw new AppErrors('Wrong email/password', 401);

  const query: string = `
    SELECT *
    FROM users
    WHERE email = $1
  `
  const queryResult: QueryResult<TUser> = await client.query(query, [email]);

  res.locals.user = {
    ...queryResult.rows[0]
  }

  if(queryResult.rowCount === 0 || !queryResult.rows[0].active) {
    throw new AppErrors('Wrong email/password', 401);
  }

  return next();
}

export default ensureEmailExistsAndUserIsActive;