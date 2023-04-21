import { Request, Response } from "express";
import { usersService } from '../../services/users/index';

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

  const userToUpdateId: string = req.params.id;
  
  await usersService.deleteUserServices(userToUpdateId)

  return res.status(204).json();
  
}

export default deleteUserController;