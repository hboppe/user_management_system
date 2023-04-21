import { Router } from "express";
import {
  createUserRequestSchema,
  updateUserRequestSchema,
} from "../schemas/users";
import { usersMiddlewares } from "../middlewares/users/index";
import { usersController } from "../controllers";

const usersRouters: Router = Router();

usersRouters.post(
  "",
  usersMiddlewares.ensureDataIsValidMiddleware(createUserRequestSchema),
  usersMiddlewares.ensureEmailDoesNotExistMiddleware,
  usersController.createUserController
);

usersRouters.patch(
  "/:id",
  usersMiddlewares.ensureDataIsValidMiddleware(updateUserRequestSchema),
  usersMiddlewares.ensureTokenIsValidMiddleware,
  usersMiddlewares.ensureUserHasPermissionMiddleware,
  usersController.updateUserController
);

usersRouters.delete(
  '/:id',
  usersMiddlewares.ensureTokenIsValidMiddleware,
  usersMiddlewares.ensureUserHasPermissionMiddleware,
  usersController.deleteUserController
)

usersRouters.get(
  '',
  usersMiddlewares.ensureTokenIsValidMiddleware,
  usersMiddlewares.ensureUserIsAdminMiddleware,
  usersController.getAllUsersController
)

usersRouters.get(
  '/profile',
  usersMiddlewares.ensureTokenIsValidMiddleware,
  usersController.getUserProfileController
)

usersRouters.put(
  '/:id/recover',
  usersMiddlewares.ensureTokenIsValidMiddleware,
  usersMiddlewares.ensureUserIsAdminMiddleware,
  usersMiddlewares.ensureUserIsNotActiveMiddleware,
  usersController.recoverAnUserController
)

export default usersRouters;
