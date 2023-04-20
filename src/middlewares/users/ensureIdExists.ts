import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database";
import { AppErrors } from "../../error";
import { TUserResponse } from "../../interfaces/users";

const ensureIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = Number(req.params.id);

  const query: string = `
    SELECT * 
    FROM users
    WHERE id = $1
  `;
  
  const queryResult: QueryResult<TUserResponse> = await client.query(query, [
    id,
  ]);

  if (queryResult.rowCount === 0) throw new AppErrors("User not found", 404);

  return next();
};

export default ensureIdExists;
