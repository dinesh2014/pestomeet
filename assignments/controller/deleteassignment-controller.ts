import express from "express";
import mongoose from "mongoose";
import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";

const DeleteassignmentController = (request: any, response: any) => {
  const assignmentId = request.params.id;
  assignmentDB.findOneAndDelete({ assignmentId: assignmentId }, {}, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting Assignment", null, false));
    } else if (!docs) {
      response.json(message("Assignment Not Found", docs, false));
    } else {
      response.json(message("Assignmet deleted successfully", docs, true));
    }
  });
};

export default DeleteassignmentController;
