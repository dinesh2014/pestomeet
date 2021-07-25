import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";
const EventController = (request, response) => {
    const { eventName, eventType, eventStart, eventEnd, organiserId, organiserName, attendees } = request.body;
    let newEvent = new eventDB({
        eventName: eventName.toLowerCase(),
        eventType: eventType.toLowerCase(),
        eventStart: eventStart,
        eventEnd: eventEnd,
        organiserId: organiserId,
        organiserName: organiserName,
        attendees: attendees
    });
    eventDB.findOne({ eventName: eventName.toLowerCase(), eventType: eventType, eventStart: eventStart }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while creating Event, Try Again !", null, false));
        }
        else if (!result) {
            newEvent.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Event created Successfully", null, false));
                }
            });
        }
        else {
            response.json(message("Event is already Scheduled", null, false));
        }
    });
};
export default EventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZXZlbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50L2NvbnRyb2xsZXIvY3JlYXRlZXZlbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsYUFBYSxFQUFDLFNBQVMsRUFBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDeEcsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUM7UUFDekIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUU7UUFDbEMsVUFBVSxFQUFFLFVBQVU7UUFDdEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsYUFBYSxFQUFDLGFBQWE7UUFDM0IsU0FBUyxFQUFDLFNBQVM7S0FDcEIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLE9BQU8sQ0FDYixFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsVUFBVSxFQUFFLEVBQ2xGLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsa0RBQWtELEVBQ2xELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksS0FBSyxFQUFFO29CQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ25FO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNILGVBQWUsZUFBZSxDQUFDIn0=