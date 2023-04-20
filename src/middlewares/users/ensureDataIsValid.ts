import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { TLoginRequest } from "../../interfaces/session";
import { TUserRequest } from "../../interfaces/users";

const ensureDataIsValid =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData: TUserRequest | TLoginRequest = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };

export { ensureDataIsValid };
