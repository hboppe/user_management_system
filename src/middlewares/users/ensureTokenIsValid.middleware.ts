import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppErrors } from "../../error";
import 'dotenv/config';

const ensureTokenIsValidMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

  const { authorization } = req.headers;

  if(!authorization) throw new AppErrors('Missing Bearer Token', 401);

  const token: string = authorization.split(' ')[1];

  verify(
    token,
    process.env.SECRET_KEY!,
    (err, decoded) => {
      if(err) throw new AppErrors(err.message, 401);

      res.locals = {
        decoded
      }      
      return next()
    }
  )
}

export default ensureTokenIsValidMiddleware;