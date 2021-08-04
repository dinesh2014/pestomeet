import express from "express";
import listeventController from "../controller/listevent-controller";

const listeventRouter = express.Router();
listeventRouter.get("/:type", listeventController);
export default listeventRouter;
