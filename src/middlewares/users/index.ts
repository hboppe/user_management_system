import { ensureDataIsValid } from "./ensureDataIsValid";
import ensureEmailDoesNotExist from "./ensureEmailDoesNotExist";
import ensureIdExists from './ensureIdExists';
import ensureTokenIsValid from './ensureTokenIsValid';
import ensureUserHasPermission from './ensureUserHasPermission';

export const usersMiddlewares = {
  ensureDataIsValid,
  ensureEmailDoesNotExist,
  ensureIdExists,
  ensureTokenIsValid,
  ensureUserHasPermission
};
