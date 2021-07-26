import eventDB from "../schema/event-schema";
import userDB from "../../user/schema/user-schema";
import { message } from "../../utils/response-format";
const ListMyEventController = (request, response) => {
    const userID = request.params.userID;
    userDB
        .findOne({ id: userID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result == null) {
            response.json(message("No User Found", null, false));
        }
        else if (result.role == "super admin") {
            eventDB.find({}, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    response.json(message("Events Reterived", result, true));
                }
            });
        }
        else if (result.role == "admin") {
            eventDB.find({ organiserId: userID }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    response.json(message("Students Reterived", result, true));
                }
            });
        }
        else if (result.role == "mentor") {
            eventDB.find({ organiserId: userID }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    response.json(message("Events Reterived", result, true));
                }
            });
        }
        else {
            eventDB.find({ attendees: { $elemMatch: { batchMember: { $elemMatch: { id: userID } } } } }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    response.json(message("Events Reterived", result, false));
                }
            });
        }
    });
};
export default ListMyEventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15ZXZlbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50L2NvbnRyb2xsZXIvbGlzdG15ZXZlbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxNQUFNO1NBQ0gsT0FBTyxDQUNOLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUNYLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDdEMsQ0FBQztTQUNIO2FBQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3hFO3FCQUFNLElBQUksTUFBTSxDQUFD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