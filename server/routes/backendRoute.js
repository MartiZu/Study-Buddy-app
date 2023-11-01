import express from "express";
import * as backendController from "../controllers/backendController.js"; //import all controller functions

export const backendRoute = express.Router();

//backend router and express method using controller functions
backendRoute.get("/", backendController.getBackendList);
backendRoute.post("/", backendController.postBackend);
backendRoute.delete("/:id", backendController.deleteBackend);
