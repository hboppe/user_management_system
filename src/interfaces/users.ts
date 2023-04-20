import { z } from "zod";
import {
  createUserRequestSchema,
  createUserSchemaResponse,
  updateUserRequestSchema,
  userSchema,
} from "../schemas/users";

type TUserRequest = z.infer<typeof createUserRequestSchema>;
type TUserResponse = z.infer<typeof createUserSchemaResponse>;
type TUpdateUserRequest = z.infer<typeof updateUserRequestSchema>;
type TUser = z.infer<typeof userSchema>;

export { TUserRequest, TUserResponse, TUpdateUserRequest, TUser };
