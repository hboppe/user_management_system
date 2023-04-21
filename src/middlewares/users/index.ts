import { ensureDataIsValid } from "./ensureDataIsValid";
import ensureEmailDoesNotExist from "./ensureEmailDoesNotExist";
import ensureIdExists from './ensureIdExists';
import ensureTokenIsValid from './ensureTokenIsValid';
import ensureUserHasPermission from './ensureUserHasPermission';
import ensureUserIsAdmin from './ensureUserIsAdmin';
import ensureUserIsNotActive from './ensureUserIsNotActive';

export const usersMiddlewares = {
  ensureDataIsValid,
  ensureEmailDoesNotExist,
  ensureIdExists,
  ensureTokenIsValid,
  ensureUserHasPermission,
  ensureUserIsAdmin,
  ensureUserIsNotActive
};
