import express, { Router } from "express";
import createeventController from "../controller/createevent-controller";

const createeventRouter: Router = express.Router();
createeventRouter.post("/", createeventController);

export default createeventRouter;
