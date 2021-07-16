import express, { Router } from "express";
import createresourceController from "../controller/createresource-controller";

const createresourceRouter: Router = express.Router();
createresourceRouter.post("/", createresourceController);

export default createresourceRouter;
