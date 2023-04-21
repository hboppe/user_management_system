import { Request, Response } from "express";
import { usersService } from "../../services";

const recoverAnUserController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.id);

  const recoveredUser = await usersService.recoverUser(userId);
  
  return res.status(200).json(recoveredUser);

}

export default recoverAnUserController;