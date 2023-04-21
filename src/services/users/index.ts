import createUserServices from './createUser.services';
import updateUserServices from './updateUser.services';
import deleteUserServices from './deleteUser.services';
import getAllUsersServices from './getAllUsers.services';
import getUserProfileServices from './getUserProfile.services';
import recoverUserServices from './recoverUser.services';

export  const usersService = {
  createUserServices,
  updateUserServices,
  deleteUserServices,
  getAllUsersServices,
  getUserProfileServices,
  recoverUserServices
}