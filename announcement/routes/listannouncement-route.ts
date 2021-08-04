import express from "express";
import listannouncementController from "../controller/listannouncement-controller";

const listannouncementRouter = express.Router();
listannouncementRouter.get("/", listannouncementController);
export default listannouncementRouter;
