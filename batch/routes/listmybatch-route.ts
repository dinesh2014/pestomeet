import express from "express";
import listmybatchController from "../../batch/controller/listmybatch-controller";

const listmybatchRouter = express.Router();
listmybatchRouter.get("/:userID", listmybatchController);

export default listmybatchRouter;
