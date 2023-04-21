import { QueryResult } from 'pg';
import { client } from '../../database';
import { AppErrors } from '../../error';

const deleteUserServices = async (userToUpdateId: string): Promise<void> => {

  const query: string = 
  `
    UPDATE users
    SET "active" = 'false'
    WHERE id = $1
  `
  const queryResult: QueryResult = await client.query(query, [userToUpdateId]);

  if(queryResult.rowCount === 0) throw new AppErrors('User not found', 404);

  return;
}

export default deleteUserServices;