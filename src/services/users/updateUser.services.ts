import format from "pg-format";
import { AppErrors } from "../../error";
import { QueryResult } from 'pg';
import { TUpdateUserRequest, TUserResponse } from "../../interfaces/users";
import client from '../../database/config';
import { userSchemaResponse } from "../../schemas/users";

const updateUserServices = async (userToUpdateId: string, userToUpdateInfos: TUpdateUserRequest): Promise<TUserResponse> => {

  const query: string = format(`
      UPDATE users
      SET (%I) = ROW (%L)
      WHERE id = $1
      RETURNING *;
    `,
    Object.keys(userToUpdateInfos),
    Object.values(userToUpdateInfos)
  )

  const queryResult: QueryResult<TUserResponse> = await client.query(query, [userToUpdateId]);

  if(queryResult.rowCount === 0) throw new AppErrors('User not found', 404)

  return userSchemaResponse.parse(queryResult.rows[0]);
}

export default updateUserServices;