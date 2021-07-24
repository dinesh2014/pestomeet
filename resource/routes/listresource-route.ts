import express from "express";
import listresourceController from "../controller/listresource-controller";

const listresourceRouter = express.Router();
listresourceRouter.get("/:eventID", listresourceController);

export default listresourceRouter;
