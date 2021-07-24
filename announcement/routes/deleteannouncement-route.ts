import express, { Router } from "express";
import deleteannouncementController from "../controller/deleteannouncement-controller";

const deleteannouncementRouter: Router = express.Router();
deleteannouncementRouter.delete("/:id", deleteannouncementController);

export default deleteannouncementRouter;
