import express from "express";
import countMyAssetsController from "../controller/countmyassets-controller";

const countMyAssetsRouter = express.Router();
countMyAssetsRouter.get("/:userID", countMyAssetsController);

export default countMyAssetsRouter;
