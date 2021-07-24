import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";

const ListassignmentController = (request: any, response: any) => {
  const eventID = request.params.eventID;
  assignmentDB
    .find(
      {eventID: eventID},
      (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving assignment", errors, false));
        } else if (result.length == 0) {
          response.json(
            message("No assignment available for the event", null, false)
          );
        } else {
          response.json(
            message(
              String(result.length) + " Assignment available for the event ",
              result,
              true
            )
          );
        }
      }
    )
};

export default ListassignmentController;
