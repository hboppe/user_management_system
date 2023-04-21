import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database";
import { AppErrors } from "../../error";

const ensureUserIsNotActive = async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = Number(req.params.id);

  const query = `
    SELECT *
    FROM users
    WHERE id = $1 AND active = TRUE;
  `
  const queryResult: QueryResult = await client.query(query, [userId]);
  
  if(queryResult.rowCount > 0) throw new AppErrors('User already active', 400);

  return next();
}

export default ensureUserIsNotActive;