import express from "express";
import * as funstuffController from "../controllers/funstuffController.js"; //import all controller functions
import { getUserInfo } from "../controllers/funstuffController.js";

export const funstuffRoute = express.Router();

//funstuff router and express method using controller functions
funstuffRoute.post("/users/user", getUserInfo);
funstuffRoute.get("/", funstuffController.getFunstuffList);
funstuffRoute.post("/", funstuffController.postFunstuff);
funstuffRoute.delete("/:id", funstuffController.deleteFunstuff);
