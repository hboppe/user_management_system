import { QueryResult } from "pg";
import format from "pg-format";
import client from '../../database/config';

const createUserService = async (userData: any) => {

  const query: string = format(`
      INSERT INTO users (%I)
      VALUES (%L)
      RETURNING *;
    `,
    Object.keys(userData),
    Object.values(userData)
  )

  const queryResult: QueryResult = await client.query(query);

  return queryResult.rows[0];
}

export default createUserService;