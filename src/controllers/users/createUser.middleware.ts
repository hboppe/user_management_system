import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../../interfaces/users";
import { usersService } from "../../services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;

  const newUser: TUserResponse = await usersService.createUserServices(userData);

  return res.status(201).json(newUser);
};

export default createUserController;
