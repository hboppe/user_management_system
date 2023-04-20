import { NextFunction, Request, Response } from "express";
import { AppErrors } from "../../error";

const ensureUserHasPermission = async (req: Request, res: Response, next: NextFunction) => {
  const userId: string = res.locals.decoded.sub;
  const userToUpdateId: string = req.params.id;
  const isUserAdmin: boolean = res.locals.decoded.admin

  if(userId !== userToUpdateId && !isUserAdmin) throw new AppErrors('Insufficient Permission', 403);

  return next()
}

export default ensureUserHasPermission;