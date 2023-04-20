import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppErrors } from "../../error";
import { TLoginRequest } from "../../interfaces/session";
import 'dotenv/config'

const createSession = (loginData: TLoginRequest, hashedPassword: string, admin: string, id: string): string => {

  const passwordsMatch: boolean = compareSync(loginData.password, hashedPassword);

  if(!passwordsMatch) throw new AppErrors('Wrong email/password', 401);

  const token: string = sign(
    { email: loginData.email,
      admin: admin },
    String(process.env.SECRET_KEY),
    { expiresIn: '24h', subject: String(id)}
  );

  return token;
}

export default createSession;