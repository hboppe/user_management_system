import createUserController from './createUserController';
import updateUserController from './updateUserController';
import deleteUserController from './deleteUserController';
import getAllUsersController from './getAllUsersController';
import getUserProfileController from './getUserProfileControler';
import recoverAnUserController from './recoverAnUserController';

export const usersController = {
  createUserController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
  getUserProfileController,
  recoverAnUserController
}