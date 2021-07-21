import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";

const ListeventController = (request: any, response: any) => {
  const eventType = request.params.type;
  eventDB.find(
    { eventType: eventType.toLowerCase() },
    (errors: any, result: any) => {
      if (errors) {
        response.json(message("Error while reteriving event", errors, false));
      } else if (result.length == 0) {
        response.json(
          message("No " + String(eventType) + " Event found", null, false)
        );
      } else {
        response.json(
          message(
            String(result.length) + " " + String(eventType) + " Event Found",
            result,
            true
          )
        );
      }
    }
  );
};

export default ListeventController;
