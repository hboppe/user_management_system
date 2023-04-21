import { Request, Response } from "express";
import { usersService } from "../../services";

const updateUserController = async (req: Request, res: Response) => {
  const userToUpdateId: string = req.params.id;
  const userToUpdateInfos = req.body;

  const updatedUser = await usersService.updateUserServices(userToUpdateId, userToUpdateInfos);

  return res.status(200).json(updatedUser);
}

export default updateUserController;