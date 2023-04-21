import { Request, Response } from "express";
import { sessionServices } from "../../services/session/index";

const createSessionControler = (
  req: Request,
  res: Response
): Response => {
  const { password, admin, id } = res.locals.user;

  const createUserReturn = sessionServices.createSessionServices(
    req.body,
    password,
    admin,
    id
  );

  return res.status(200).json({
    token: createUserReturn,
  });
};

export default createSessionControler;
