import createUserController from './createUserController';
import updateUserController from './updateUserController';
import deleteUserController from './deleteUserController';
import getAllUsers from './getAllUsers';

export const usersController = {
  createUserController,
  updateUserController,
  deleteUserController,
  getAllUsers
}