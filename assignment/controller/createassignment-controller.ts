import assignmentDB from "../schema/assignment-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";

const RegisterteamController = (request: any, response: any) => {
  const { assignmentName, uploaderId, uploaderName, eventID, eventName,eventType,assignmentLinks} = request.body;
  let newAssignment = new assignmentDB({
    assignmentName: assignmentName.toLowerCase(),
    uploaderId: uploaderId,
    uploaderName: uploaderName,
    eventID: eventID,
    eventName: eventName,
    eventType:eventType,
    assignmentLinks:assignmentLinks,
  });

  assignmentDB.findOne(
    { assignmentName: assignmentName.toLowerCase(),uploaderId:uploaderId ,eventID:eventID },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while submitting assignment, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newAssignment.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Assignment Submitted Successfully", null, true));
          }
        });
      } else {
        response.json(message("Assignment is already submitted", null, false));
      }
    }
  );
};

export default RegisterteamController;
