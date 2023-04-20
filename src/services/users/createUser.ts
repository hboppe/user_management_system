import { hashSync } from "bcryptjs";
import { QueryResult } from "pg";
import format from "pg-format";
import client from "../../database/config";
import { TUserRequest, TUserResponse } from "../../interfaces/users";
import { userSchemaResponse } from "../../schemas/users";

const createUser = async (userData: TUserRequest): Promise<TUserResponse> => {
  const hashedPassword = hashSync(userData.password, 12);

  userData.password = hashedPassword;

  const query: string = format(
    `
      INSERT INTO users (%I)
      VALUES (%L)
      RETURNING *;
    `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: QueryResult<TUserResponse> = await client.query(query);

  const validatedResponse: TUserResponse = userSchemaResponse.parse(
    queryResult.rows[0]
  );

  return validatedResponse;
};

export default createUser;