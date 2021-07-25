import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";
const RegisterteamController = (request, response) => {
    const { assignmentName, uploaderId, uploaderName, eventID, eventName, eventType, assignmentLinks } = request.body;
    let newAssignment = new assignmentDB({
        assignmentName: assignmentName.toLowerCase(),
        uploaderId: uploaderId,
        uploaderName: uploaderName,
        eventID: eventID,
        eventName: eventName,
        eventType: eventType,
        assignmentLinks: assignmentLinks,
    });
    assignmentDB.findOne({ assignmentName: assignmentName.toLowerCase(), uploaderId: uploaderId, eventID: eventID }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while submitting assignment, Try Again !", null, false));
        }
        else if (!result) {
            newAssignment.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Assignment Submitted Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Assignment is already submitted", null, false));
        }
    });
};
export default RegisterteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYXNzaWdubWVudC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXNzaWdubWVudC9jb250cm9sbGVyL2NyZWF0ZWFzc2lnbm1lbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM3RCxNQUFNLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMvRyxJQUFJLGFBQWEsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUNuQyxjQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRTtRQUM1QyxVQUFVLEVBQUUsVUFBVTtRQUN0QixZQUFZLEVBQUUsWUFBWTtRQUMxQixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUMsU0FBUztRQUNuQixlQUFlLEVBQUMsZUFBZTtLQUNoQyxDQUFDLENBQUM7SUFFSCxZQUFZLENBQUMsT0FBTyxDQUNsQixFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsV0FBVyxFQUFFLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsT0FBTyxFQUFFLEVBQ3ZGLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wseURBQXlELEVBQ3pELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksS0FBSyxFQUFFO29CQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3pFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsc0JBQXNCLENBQUMifQ==