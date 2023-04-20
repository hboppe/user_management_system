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
  usersMiddlewares.ensureEmailDoesNotExist,
  usersMiddlewares.ensureDataIsValid(createUserRequestSchema),
  usersController.createUser
);

usersRouters.patch(
  "",
  usersMiddlewares.ensureIdExists,
  usersMiddlewares.ensureDataIsValid(updateUserRequestSchema)
  //continuar: token, atualizacao
);

export default usersRouters;
