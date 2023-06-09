import { Router } from "express";
import { sessionMiddlewares } from "../middlewares";
import { usersMiddlewares } from '../middlewares/users/index';
import { loginRequestSchema } from "../schemas/session";
import { sessionController } from "../controllers";

const sessionRouter: Router = Router();

sessionRouter.post(
  '',
  usersMiddlewares.ensureDataIsValidMiddleware(loginRequestSchema),
  sessionMiddlewares.ensureEmailExistsAndUserIsActiveMiddleware,
  sessionController.createSessionControler
)

export default sessionRouter;
