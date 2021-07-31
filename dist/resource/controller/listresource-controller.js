import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
const ListresourceController = (request, response) => {
    const eventId = request.params.eventId;
    resourceDB
        .find({ eventId: eventId }).populate("eventDetail").populate("uploaderDetail").exec((errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving resource", errors, false));
        }
        else if (result.length == 0) {
            console.log(result);
            response.json(message("No resource available for the event", null, false));
        }
        else {
            let resources = {
                resourceLinks: result[0].resourceLinks,
                resourceName: result[0].resourceName,
                uploaderId: result[0].uploaderId,
                uploaderName: result[0].uploaderDetail.name,
                eventId: result[0].eventId,
                eventName: result[0].eventDetail.eventName,
                resourceKey: result[0].resourceKey,
                resource: result[0].resource,
                resourceId: result[0].resourceId,
            };
            response.json(message(String(result.length) + " Resources available for the event ", resources, true));
        }
    });
};
export default ListresourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHJlc291cmNlLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZS9jb250cm9sbGVyL2xpc3RyZXNvdXJjZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLHNCQUFzQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzdELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLFVBQVU7U0FDUCxJQUFJLENBQ0gsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQ3ZHLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDMUU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMscUNBQXFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUM1RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksU0FBUyxHQUFFO2dCQUNiLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYTtnQkFDdEMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO2dCQUNwQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7Z0JBQy9CLFlBQVksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUk7Z0JBQzFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztnQkFDMUIsU0FBUyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFDekMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO2dCQUNsQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7Z0JBQzVCLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTthQUNqQyxDQUFBO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FFWCxPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxxQ0FBcUMsRUFDN0QsU0FBUyxFQUNULElBQUksQ0FDTCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRixDQUFBO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsZUFBZSxzQkFBc0IsQ0FBQyJ9