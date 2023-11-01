import express from "express";
import * as frontendController from "../controllers/frontendController.js"; //import all controller functions

export const frontendRoute = express.Router();

//frontend router and express method using controller functions
frontendRoute.get("/", frontendController.getFrontendList);
frontendRoute.post("/", frontendController.postFrontend);
frontendRoute.delete("/:id", frontendController.deleteFrontend);
