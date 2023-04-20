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
  "",
  usersMiddlewares.ensureIdExists,
  usersMiddlewares.ensureDataIsValid(updateUserRequestSchema)
  //continuar: token, atualizacao
);

export default usersRouters;
