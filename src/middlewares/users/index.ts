import { ensureDataIsValid } from "./ensureDataIsValid";
import ensureEmailDoesNotExist from "./ensureEmailDoesNotExist";
import ensureIdExists from './ensureIdExists';

export const usersMiddlewares = {
  ensureDataIsValid,
  ensureEmailDoesNotExist,
  ensureIdExists
};
