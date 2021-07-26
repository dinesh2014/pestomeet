import express from "express";
import listmyteamController from "../controller/listmyteam-controller";
const listmyteamRouter = express.Router();
listmyteamRouter.get("/:userID", listmyteamController);
export default listmyteamRouter;
