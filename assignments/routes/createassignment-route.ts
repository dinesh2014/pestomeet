import express, { Router } from "express";
import createassignmentController from "../controller/createassignment-controller";

const createassignmentRouter: Router = express.Router();
createassignmentRouter.post("/", createassignmentController);

export default createassignmentRouter;
