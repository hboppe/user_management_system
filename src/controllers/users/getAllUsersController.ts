import { Request, Response } from "express";
import { usersService } from "../../services";

const getAllUsersController = async  (req: Request, res: Response) => {
  const allUsers = await usersService.getAllUsers();

  return res.status(200).json(allUsers)
}

export default getAllUsersController;