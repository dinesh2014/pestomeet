import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const ListassignmentController = (request, response) => {
    const eventID = request.params.eventID;
    assignmentDB
        .find({ eventID: eventID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving assignment", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No assignment available for the event", null, false));
        }
        else {
            response.json(message(String(result.length) + " Assignment available for the event ", result, true));
        }
    });
};
export default ListassignmentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFzc2lnbm1lbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2lnbm1lbnQvY29udHJvbGxlci9saXN0YXNzaWdubWVudC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLFlBQVk7U0FDVCxJQUFJLENBQ0gsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEVBQ2xCLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDNUU7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLHVDQUF1QyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDOUQsQ0FBQztTQUNIO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLHNDQUFzQyxFQUM5RCxNQUFNLEVBQ04sSUFBSSxDQUNMLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUE7QUFDTCxDQUFDLENBQUM7QUFFRixlQUFlLHdCQUF3QixDQUFDIn0=