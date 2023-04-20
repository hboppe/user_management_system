import { z } from "zod";
import {
  createUserRequestSchema,
  userSchemaResponse,
  updateUserRequestSchema,
  userSchema,
} from "../schemas/users";

type TUserRequest = z.infer<typeof createUserRequestSchema>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
type TUser = z.infer<typeof userSchema>;

export { TUserRequest, TUserResponse, TUpdateUserRequest, TUser };
