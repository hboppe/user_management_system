import { QueryResult } from "pg";
import { client } from "../../database";
import { TAllUsers } from "../../interfaces/users";
import { allUsersSchema } from "../../schemas/users";

const getAllUsers = async () => {

  const query: string = `
    SELECT 
      "id",
      "name",
      "email",
      "admin",
      "active"
    FROM users
    ORDER BY id;
  ` 

  const queryResult: QueryResult = await client.query(query);
  const validatedData = allUsersSchema.parse(queryResult.rows);
  return validatedData;

}

export default getAllUsers;