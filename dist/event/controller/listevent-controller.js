import eventDB from "../schema/event-schema";
import { message } from "../../utils/response-format";
const ListeventController = (request, response) => {
    const eventType = request.params.type;
    eventDB.find({ eventType: eventType.toLowerCase() }).populate("organiserDetail").exec((errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving event", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No " + String(eventType) + " Event found", null, false));
        }
        else {
            let events = result.map((items) => {
                return {
                    eventId: items.eventId,
                    eventName: items.eventName,
                    eventType: items.eventType,
                    eventStart: items.eventStart,
                    eventEnd: items.eventEnd,
                    eventColor: items.eventColor,
                    eventDescription: items.eventDescription,
                    hasAssignment: items.hasAssignment,
                    organiserId: items.organiserId,
                    resourceCount: items.resourceCount,
                    organiserName: items.organiserDetail.name,
                    attendees: items.attendees,
                };
            });
            response.json(message(String(result.length) + " " + String(eventType) + " Event Found", events, true));
        }
    });
};
export default ListeventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGV2ZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ldmVudC9jb250cm9sbGVyL2xpc3RldmVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDcEcsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2RTthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUNqRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDL0IsT0FBTztvQkFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3RCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztvQkFDMUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO29CQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7b0JBQzVCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtvQkFDeEIsVUFBVSxFQUFDLEtBQUssQ0FBQyxVQUFVO29CQUMzQixnQkFBZ0IsRUFBQyxLQUFLLENBQUMsZ0JBQWdCO29CQUN2QyxhQUFhLEVBQUMsS0FBSyxDQUFDLGFBQWE7b0JBQ2pDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztvQkFDOUIsYUFBYSxFQUFDLEtBQUssQ0FBQyxhQUFhO29CQUNqQyxhQUFhLEVBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJO29CQUN4QyxTQUFTLEVBQUMsS0FBSyxDQUFDLFNBQVM7aUJBQzFCLENBQUE7WUFDSCxDQUFDLENBQUMsQ0FBQTtZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFjLEVBQ2hFLE1BQU0sRUFDTixJQUFJLENBQ0wsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsbUJBQW1CLENBQUMifQ==