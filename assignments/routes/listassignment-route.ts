import express from "express";
import listeventController from "../controller/listassignment-controller";


const listeventRouter = express.Router();
listeventRouter.get("/:eventID", listeventController);
export default listeventRouter;