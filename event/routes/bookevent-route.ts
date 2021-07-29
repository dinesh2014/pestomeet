import express from "express";
import bookeventController from "../controller/bookevent-controller";

const bookeventRouter = express.Router();

bookeventRouter.post("/:eventId", bookeventController);

export default bookeventRouter;
