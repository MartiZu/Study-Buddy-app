// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get all from db
export async function getFrontend() {
  // Define the SQL query to fetch all data from the frontend table
  const queryText = "SELECT * FROM frontend";
  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);
  // The rows property of the result object contains the retrieved records
  console.log(result);
  return result.rows;
}

// console.log(getFrontend())

//POST function to add new value in the frontend table
export async function createFrontend(frontend) {
  // Query the database to create an frontend and return the newly created frontend
  const queryText =
    "INSERT INTO frontend (title, description, link, imglink, category) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  //define elements of the request and placeholder values
  const result = await pool.query(queryText, [
    frontend.title,
    frontend.description,
    frontend.link,
    frontend.imglink,
    frontend.category,
  ]);
  //return result
  return result.rows[0] || null;
}

export async function deleteFrontendById(id) {
  // Delete item by id
  const deleteFrontendQuery = "DELETE FROM frontend WHERE id = $1 RETURNING *";
  const result = await pool.query(deleteFrontendQuery, [id]);
  // Return the deleted item or null
  if (result.rowCount === 0) {
    return null;
  }
  return result.rows[0];
}
