import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";


const EventController = (request: any, response: any) => {
    const { eventName, eventType, eventStart, eventEnd, organiserId,organiserName,attendees} = request.body;
    let newEvent = new eventDB({
      eventName: eventName.toLowerCase(),
      eventType: eventType.toLowerCase(),
      eventStart: eventStart,
      eventEnd: eventEnd,
      organiserId: organiserId,
      organiserName:organiserName,
      attendees:attendees
    });
  
    eventDB.findOne(
      { eventName: eventName.toLowerCase() ,eventType:eventType ,eventStart:eventStart },
      (error: any, result: any) => {
        if (error) {
          response.json(
            message(
              "Error Happened while creating Event, Try Again !",
              null,
              false
            )
          );
        } else if (!result) {
            newEvent.save((error: any, result: any) => {
            if (error) {
              response.json({ message: error });
            } else {
              response.json(message("Event created Successfully", null, false));
            }
          });
        } else {
          response.json(message("Event is already Scheduled", null, false));
        }
      }
    );
 };
export default EventController;
