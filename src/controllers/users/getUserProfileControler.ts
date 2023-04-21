import { Request, Response } from "express";
import { TUserResponse } from '../../interfaces/users';
import { usersService } from "../../services";

const getUserProfileController = async (req: Request, res: Response): Promise<Response<TUserResponse>> => {

  const id: number = Number(res.locals.decoded.sub)

  const userInfos = await usersService.getUserProfile(id);

  return res.status(200).json(userInfos)
}

export default getUserProfileController;