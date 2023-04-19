import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import ensureEmailDoesNotExist from '../middlewares/ensureEmailDoesNotExist.middlewares';

const usersRouters: Router = Router();

usersRouters.post(
  '', 
  ensureEmailDoesNotExist,
  createUserController
);

export default usersRouters;