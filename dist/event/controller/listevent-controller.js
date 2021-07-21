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
            response.json(message(String(result.length) + " " + String(eventType) + " Event Found", result, true));
        }
    });
};
export default ListeventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGV2ZW50LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ldmVudC9jb250cm9sbGVyL2xpc3RldmVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQ1YsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQ3RDLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDakUsQ0FBQztTQUNIO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsY0FBYyxFQUNoRSxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLG1CQUFtQixDQUFDIn0=