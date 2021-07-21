import express from "express";
import deleteeventController from "../controller/deleteevent-controller";

const deleteeventRouter = express.Router();
deleteeventRouter.delete("/:id", deleteeventController);

export default deleteeventRouter;
