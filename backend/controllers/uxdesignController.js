import {
  getUxdesign,
  createUxdesign,
  deleteUxdesignById,
} from "../models/uxdesignModel.js";

//HTTP handler for get all
export async function getUxdesignList(req, res) {
  try {
    const UxdesignData = await getUxdesign();
    res.status(200).send({ status: "success", data: UxdesignData });
    console.log(UxdesignData);
  } catch (error) {
    // Handle the error, for example, by sending an error response.
    res.status(500).send({
      status: "error",
      message: "An error occurred while fetching UX design data.",
    });
    console.error(error);
  }
}

//HTTP handler route for POST
export async function postUxdesign(req, res) {
  try {
    //store in a variable the req.body
    const newData = req.body;
    //store in a variable the await promise
    const newUxdesignData = await createUxdesign(newData);
    //return status
    res.status(201).json({ status: "success", data: newUxdesignData });
  } catch (error) {
    // Handle the error, for example, by sending an error response.
    res.status(500).send({
      status: "error",
      message: "An error occurred while creating UX design data.",
    });
    console.error(error);
  }
}

//Endpoint to delete item by id
export async function deleteUxdesign(req, res) {
  try {
    //store in a variable your req.params.id
    const id = req.params.id;
    //store in a variable the await promise
    const deleteItem = await deleteUxdesignById(id);
    //404 error if item not found
    if (!deleteItem) {
      return res
        .status(404)
        .json({ status: "fail", data: "Data item not found by Id." });
    }
    //return success status
    res.status(200).json({ status: "success", data: deleteItem });
  } catch (error) {
    // Handle the error, for example, by sending an error response.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while deleting the UX design data.",
      });
  }
}
