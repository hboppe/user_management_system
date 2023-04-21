import createUser from './createUser';
import updateUser from './updateUser';
import deleteUser from './deleteUser';
import getAllUsers from './getAllUsers';
import getUserProfile from './getUserProfile';
import recoverUser from './recoverUser';

export  const usersService = {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
  getUserProfile,
  recoverUser
}