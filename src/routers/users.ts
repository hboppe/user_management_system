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
  usersMiddlewares.ensureDataIsValid(createUserRequestSchema),
  usersMiddlewares.ensureEmailDoesNotExist,
  usersController.createUserController
);

usersRouters.patch(
  "/:id",
  usersMiddlewares.ensureDataIsValid(updateUserRequestSchema),
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureUserHasPermission,
  usersController.updateUserController
);

usersRouters.delete(
  '/:id',
  usersMiddlewares.ensureTokenIsValid,
  usersMiddlewares.ensureUserHasPermission,
  usersController.deleteUserController
)

usersRouters.get(
  '',
  usersMiddlewares.ensureTokenIsValid,
  
)

export default usersRouters;
