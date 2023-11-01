import express from "express";
import * as uxdesignController from "../controllers/uxdesignController.js"; //import all controller functions

export const uxdesignRoute = express.Router();

//uxdesign router and express method using controller functions
uxdesignRoute.get("/", uxdesignController.getUxdesignList);
uxdesignRoute.post("/", uxdesignController.postUxdesign);
uxdesignRoute.delete("/:id", uxdesignController.deleteUxdesign);
