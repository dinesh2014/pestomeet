import express from "express";
import listStudentController from "../controller/liststudents-controller";

const listStudentRouter = express.Router();
listStudentRouter.get("/:userID", listStudentController);

export default listStudentRouter;
