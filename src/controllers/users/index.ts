import createUserController from './createUser.middleware';
import updateUserController from './updateUser.middleware';
import deleteUserController from './deleteUser.middleware';
import getAllUsersController from './getAllUsers.middleware';
import getUserProfileController from './getUserProfile.middleware';
import recoverAnUserController from './recoverAnUser.middleware';

export const usersController = {
  createUserController,
  updateUserController,
  deleteUserController,
  getAllUsersController,
  getUserProfileController,
  recoverAnUserController
}