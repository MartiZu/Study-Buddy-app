import {
  getFrontend,
  createFrontend,
  deleteFrontendById,
} from "../models/frontendModel.js";

//HTTP handler for get all
export async function getFrontendList(req, res) {
  try {
    const frontendData = await getFrontend();
    res.status(200).send({ status: "success", data: frontendData });
    console.log(frontendData);
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching Frontend data.",
    });
  }
}

//HTTP handler route for POST
export async function postFrontend(req, res) {
  try {
    //store in a variable the req.body
    const newData = req.body;
    //store in a variable the await promise
    const newDFrontendData = await createFrontend(newData);
    //return status
    res.status(201).json({ status: "success", data: newDFrontendData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating Frontend data.",
    });
  }
}

//Endpoint to delete item by id
export async function deleteFrontend(req, res) {
  try {
    //store in a variable your req.params.id
    const id = req.params.id;
    //store in a variable the await promise
    const deleteItem = await deleteFrontendById(id);
    //404 error if item not found
    if (!deleteItem) {
      return res
        .status(404)
        .json({ status: "fail", data: "Data item not found by Id." });
    }
    //return success status
    res.status(200).json({ status: "success", data: deleteItem });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the Frontend data.",
    });
  }
}
