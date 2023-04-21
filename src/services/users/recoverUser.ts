import { QueryResult } from "pg";
import { client } from "../../database";
import { userSchemaResponse } from "../../schemas/users";

const recoverUser = async (userId: number) => {

  const query = `
    UPDATE users
    SET active = true
    WHERE id = $1
    RETURNING *;
  `
  const queryResult: QueryResult = await client.query(query, [userId]);

  return userSchemaResponse.parse(queryResult.rows[0]);
}

export default recoverUser;