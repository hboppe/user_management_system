import { Response, Request, NextFunction } from 'express';
import { AppErrors } from '../../error';

const ensureUserIsAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const admin: boolean = res.locals.decoded.admin;

  if(!admin) throw new AppErrors('Insufficient Permission', 403);
  
  return next();
}

export default ensureUserIsAdminMiddleware;