import express, { Router } from "express";
import createannouncementController from "../controller/createannouncement-controller";

const createannouncementRouter: Router = express.Router();
createannouncementRouter.post("/", createannouncementController);

export default createannouncementRouter;
