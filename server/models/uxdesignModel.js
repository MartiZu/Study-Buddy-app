// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get all from db
export async function getUxdesign() {
  // Define the SQL query to fetch all data from the uxdesign table
  const queryText = "SELECT * FROM uxdesign";
  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);
  // The rows property of the result object contains the retrieved records
  console.log(result);
  return result.rows;
}

//POST function to add new value in the uxdesign table
export async function createUxdesign(uxdesign) {
  // Query the database to create an frontend and return the newly created uxdesign
  const queryText =
    "INSERT INTO uxdesign (title, description, link, imglink, category) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  //define elements of the request and placeholder values
  const result = await pool.query(queryText, [
    uxdesign.title,
    uxdesign.description,
    uxdesign.link,
    uxdesign.imglink,
    uxdesign.category,
  ]);
  //return result or null
  return result.rows[0] || null;
}

export async function deleteUxdesignById(id) {
  // Delete item by id
  const deleteUxdesignQuery = "DELETE FROM uxdesign WHERE id = $1 RETURNING *";
  const result = await pool.query(deleteUxdesignQuery, [id]);
  // Return the deleted item or null
  if (result.rowCount === 0) {
    return null;
  }
  return result.rows[0];
}
