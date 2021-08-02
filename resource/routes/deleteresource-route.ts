import express, { Router } from "express";
import deleteresourceController from "../controller/deleteresource-controller";

const deleteresourceRouter: Router = express.Router();
deleteresourceRouter.delete("/:resourceId", deleteresourceController);

export default deleteresourceRouter;
