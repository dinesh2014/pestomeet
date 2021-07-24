import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
const ListresourceController = (request, response) => {
    const eventID = request.params.eventID;
    resourceDB
        .find({ eventID: eventID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving resource", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No resource available for the event", null, false));
        }
        else {
            response.json(message(String(result.length) + " Resources available for the event ", result, true));
        }
    });
};
export default ListresourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHJlc291cmNlLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZS9jb250cm9sbGVyL2xpc3RyZXNvdXJjZS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLHNCQUFzQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzdELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLFVBQVU7U0FDUCxJQUFJLENBQ0gsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQ2xCLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDMUU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDNUQsQ0FBQztTQUNIO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLHFDQUFxQyxFQUM3RCxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixlQUFlLHNCQUFzQixDQUFDIn0=