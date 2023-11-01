// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get all from db
export async function getBackend() {
  // Define the SQL query to fetch all data from the backend table
  const queryText = "SELECT * FROM backend";
  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);
  // The rows property of the result object contains the retrieved records
  // console.log(result);
  return result.rows;
}

// console.log(getBackend())

//POST function to add new value in the backend table
export async function createBackend(backend) {
  // Query the database to create funstuff and return the newly created funstuff
  const queryText =
    "INSERT INTO backend (title, description, link, imglink, owner) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  //define elements of the request and placeholder values
  const result = await pool.query(queryText, [
    backend.title,
    backend.description,
    backend.link,
    backend.imglink,
    backend.owner,
  ]);
  //return result
  return result.rows[0] || null;
}

export async function deleteBackendById(id) {
  // Delete item by id
  const deleteBackendQuery = "DELETE FROM backend WHERE id = $1 RETURNING *";
  const result = await pool.query(deleteBackendQuery, [id]);
  // Return the deleted item or null
  if (result.rowCount === 0) {
    return null;
  }
  return result.rows[0];
}
