import { QueryResult } from 'pg';
import { client } from '../../database';
import { TUserResponse } from '../../interfaces/users';
import { userSchemaResponse } from '../../schemas/users'

const getUserProfileServices = async (id: number) => {
  const query = `
    SELECT 
      *
    FROM users
    WHERE id = $1
  `
  const queryResult: QueryResult<TUserResponse> = await client.query(query, [id]);  

  return userSchemaResponse.parse(queryResult.rows[0]);
}

export default getUserProfileServices;