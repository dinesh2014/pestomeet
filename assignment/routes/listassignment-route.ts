import express from "express";
import listeventController from "../controller/listassignment-controller";


const listassignmentRouter = express.Router();
listassignmentRouter.get("/:eventID", listeventController);
export default listassignmentRouter;