import express, { Router } from "express";
import deleteassignmentController from "../controller/deleteassignment-controller";

const deleteassignmentRouter: Router = express.Router();
deleteassignmentRouter.delete("/:id", deleteassignmentController);

export default deleteassignmentRouter;
