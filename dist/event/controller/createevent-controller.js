import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";
const EventController = (request, response) => {
    const { eventName, eventType, eventColor, eventStart, eventEnd, hasAssignment, organiserId, organiserName, attendees } = request.body;
    let newEvent = new eventDB({
        eventName: eventName.toLowerCase(),
        eventType: eventType.toLowerCase(),
        eventStart: eventStart,
        eventEnd: eventEnd,
        eventColor: eventColor,
        hasAssignment: hasAssignment,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlZXZlbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50L2NvbnRyb2xsZXIvY3JlYXRlZXZlbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDcEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNqSSxJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztRQUN6QixTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtRQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtRQUNsQyxVQUFVLEVBQUUsVUFBVTtRQUN0QixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUMsVUFBVTtRQUNyQixhQUFhLEVBQUMsYUFBYTtRQUMzQixXQUFXLEVBQUUsV0FBVztRQUN4QixhQUFhLEVBQUMsYUFBYTtRQUMzQixTQUFTLEVBQUMsU0FBUztLQUNwQixDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsT0FBTyxDQUNiLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxVQUFVLEVBQUUsRUFDbEYsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxrREFBa0QsRUFDbEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDthQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbkU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0gsZUFBZSxlQUFlLENBQUMifQ==