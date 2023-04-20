import { z } from "zod";
import { loginRequestSchema } from "../schemas/session";

type TLoginRequest = z.infer<typeof loginRequestSchema>
type TEmailLogin = {
  email: string | undefined
}

export {
  TLoginRequest,
  TEmailLogin
}