import express from "express";
import listallController from "../controller/listalluser-controller";

const listallRouter = express.Router();
listallRouter.get("/", listallController);

export default listallRouter;
