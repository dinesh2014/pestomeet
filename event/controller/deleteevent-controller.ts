import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";

const DeleteeventController = (request: any, response: any) => {
  const id = request.params.id;
  eventDB.findOneAndDelete({ eventId: id }, {}, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting event", null, false));
    } else if (!docs) {
      response.json(message("Event Not Found", docs, true));
    } else {
      response.json(message("Event deleted successfully", docs, false));
    }
  });
};

export default DeleteeventController;
