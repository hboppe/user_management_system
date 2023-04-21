import ensureDataIsValidMiddleware from "./ensureDataIsValid.middleware";
import ensureEmailDoesNotExistMiddleware from "./ensureEmailDoesNotExist.middleware";
import ensureIdExistsMiddleware from './ensureIdExists.middleware';
import ensureTokenIsValidMiddleware from './ensureTokenIsValid.middleware';
import ensureUserHasPermissionMiddleware from './ensureUserHasPermission.middleware';
import ensureUserIsAdminMiddleware from './ensureUserIsAdmin.middleware';
import ensureUserIsNotActiveMiddleware from './ensureUserIsNotActive.middleware';

export const usersMiddlewares = {
  ensureDataIsValidMiddleware,
  ensureEmailDoesNotExistMiddleware,
  ensureIdExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserHasPermissionMiddleware,
  ensureUserIsAdminMiddleware,
  ensureUserIsNotActiveMiddleware
};
