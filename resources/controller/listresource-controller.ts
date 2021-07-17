import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";

const ListresourceController = (request: any, response: any) => {
  const eventID = request.params.eventID;
  resourceDB
    .find(
      {eventID: eventID},
      (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving resource", errors, false));
        } else if (result.length == 0) {
          response.json(
            message("No resource available for the event", null, false)
          );
        } else {
          response.json(
            message(
              String(result.length) + " Resources available for the event ",
              result,
              true
            )
          );
        }
      }
    )
};

export default ListresourceController;
