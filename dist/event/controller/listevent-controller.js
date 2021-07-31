import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";
const ListeventController = (request, response) => {
    const eventType = request.params.type;
    eventDB.find({ eventType: eventType.toLowerCase() }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving event", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No " + String(eventType) + " Event found", null, false));
        }
        else {
            let events = result.map((items) => {
                return {
                    eventName: items.eventName,
                    eventType: items.eventType,
                    eventStart: items.eventStart,
                    eventEnd: items.eventEnd,
                    eventColor: items.eventColor,
                    eventDescription: items.eventDescription,
                    hasAssignment: items.hasAssignment,
                    organiserId: items.organiserId,
                    organiserName: items.organiserDetail.name,
                    attendees: items.attendees,
                };
            });
            response.json(message(String(result.length) + " " + String(eventType) + " Event Found", events, true));
        }
    });
};
export default ListeventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGV2ZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ldmVudC9jb250cm9sbGVyL2xpc3RldmVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQ3RDLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDakUsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFDLEVBQUU7Z0JBQy9CLE9BQU87b0JBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO29CQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7b0JBQzFCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtvQkFDNUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO29CQUN4QixVQUFVLEVBQUMsS0FBSyxDQUFDLFVBQVU7b0JBQzNCLGdCQUFnQixFQUFDLEtBQUssQ0FBQyxnQkFBZ0I7b0JBQ3ZDLGFBQWEsRUFBQyxLQUFLLENBQUMsYUFBYTtvQkFDakMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO29CQUM5QixhQUFhLEVBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJO29CQUN4QyxTQUFTLEVBQUMsS0FBSyxDQUFDLFNBQVM7aUJBQzFCLENBQUE7WUFDSCxDQUFDLENBQUMsQ0FBQTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFjLEVBQ2hFLE1BQU0sRUFDTixJQUFJLENBQ0wsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsbUJBQW1CLENBQUMifQ==