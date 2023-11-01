// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get all from db
export async function getFunstuff() {
  // Define the SQL query to fetch all data from the funstuff table
  const queryText = "SELECT * FROM funstuff";
  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);
  // The rows property of the result object contains the retrieved records
  return result.rows;
}

//POST function to add new value in the funstuff table
export async function createFunstuff(funstuff) {
  // Query the database to create funstuff and return the newly created funstuff
  const queryText =
    "INSERT INTO funstuff(title, description, link, imglink, owner) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  //define elements of the request and placeholder values
  const result = await pool.query(queryText, [
    funstuff.title,
    funstuff.description,
    funstuff.link,
    funstuff.imglink,
    funstuff.owner,
  ]);
  //return result
  return result.rows[0] || null;
}

export async function deleteFunstuffById(id) {
  // Delete item by id
  const deleteFunstuffQuery = "DELETE FROM funstuff WHERE id = $1 RETURNING *";
  const result = await pool.query(deleteFunstuffQuery, [id]);
  // Return the deleted item or null
  if (result.rowCount === 0) {
    return null;
  }
  return result.rows[0];
}
