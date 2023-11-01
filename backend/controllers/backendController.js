import {
  getBackend,
  createBackend,
  deleteBackendById,
} from "../models/backendModel.js";

//HTTP handler for get all
export async function getBackendList(req, res) {
  try {
    const backendData = await getBackend();
    res.status(200).json({ status: "success", data: backendData });
    // console.log(backendData);
  } catch (error) {
    // Handle the error and send an appropriate response
    res.status(500).json({ status: "error", message: error.message });
  }
}

//HTTP handler route for POST

export async function postBackend(req, res) {
  try {
    //store in a variable the req.body
    const newData = req.body;
    //store in a variable the await promise
    const newBackendData = await createBackend(newData);
    //return status
    res.status(201).json({ status: "success", data: newBackendData });
  } catch (error) {
    // Handle the error and send an appropriate response
    res.status(500).json({ status: "error", message: error.message });
  }
}

//Endpoint to delete item by id
export async function deleteBackend(req, res) {
  try {
    //store in a variable your req.params.id
    const id = req.params.id;
    //store in a variable the await promise
    const deleteItem = await deleteBackendById(id);
    //404 error if item not found
    if (!deleteItem) {
      return res
        .status(404)
        .json({ status: "fail", data: "Data item not found by Id." });
    }
    //return success status
    res.status(200).json({ status: "success", data: deleteItem });
  } catch (error) {
    // Handle the error and send an appropriate response
    res.status(500).json({ status: "error", message: error.message });
  }
}
