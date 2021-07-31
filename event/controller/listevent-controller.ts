import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";

const ListeventController = (request: any, response: any) => {
  const eventType = request.params.type;
  eventDB.find(
    { eventType: eventType.toLowerCase() }).populate("organiserDetail").exec((errors: any, result: any) => {
      if (errors) {
        response.json(message("Error while reteriving event", errors, false));
      } else if (result.length == 0) {
        response.json(
          message("No " + String(eventType) + " Event found", null, false)
        );
      } else {
        let events = result.map((items)=>{
          return {
            eventName: items.eventName,
            eventType: items.eventType,
            eventStart: items.eventStart,
            eventEnd: items.eventEnd,
            eventColor:items.eventColor,
            eventDescription:items.eventDescription,
            hasAssignment:items.hasAssignment,
            organiserId: items.organiserId,
            organiserName:items.organiserDetail.name,
            attendees:items.attendees,
          }
        })
        response.json(
          message(
            String(result.length) + " " + String(eventType) + " Event Found",
            events,
            true
          )
        );
      }
    }
  );
};

export default ListeventController;
