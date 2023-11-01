import { createUser, getUserByNameAndPassword } from "../models/usersModel.js";

export async function getUserNamePassword(req, res) {
  try {
    //store in a variable your req.params.id
    const username = req.body.username;
    const password = req.body.password;
    //store in a variable the await promise
    const user = await getUserByNameAndPassword(username, password);
    //404 error if user not found
    if (!user) {
      console.log("User not found!");
      return res.status(404).json({ status: "fail", data: "User not found." });
    }
    //return status
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching user data.",
    });
  }
}

//HTTP handler to create user
export async function postUser(req, res) {
  try {
    //store in a variable the req.body
    const newData = req.body;
    //store in a variable the await promise
    const newUserData = await createUser(newData);
    //return status
    res.status(201).json({ status: "success", data: newUserData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating a user.",
    });
  }
}
