import express from "express";
import listmyeventController from "../controller/listmyevent-controller";

const listmyeventRouter = express.Router();
listmyeventRouter.get("/:userID", listmyeventController);
export default listmyeventRouter;
