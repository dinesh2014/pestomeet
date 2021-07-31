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
            eventDB.find({}).populate("organiserDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = {
                        eventName: result[0].eventName,
                        eventType: result[0].eventType,
                        eventStart: result[0].eventStart,
                        eventEnd: result[0].eventEnd,
                        eventColor: result[0].eventColor,
                        eventDescription: result[0].eventDescription,
                        hasAssignment: result[0].hasAssignment,
                        organiserId: result[0].organiserId,
                        organiserName: result[0].organiserDetail.name,
                        attendees: result[0].attendees,
                    };
                    response.json(message("Events Reterived", events, true));
                }
            });
        }
        else if (result.role == "admin") {
            eventDB.find({ organiserId: userID }).populate("organiserDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = {
                        eventName: result[0].eventName,
                        eventType: result[0].eventType,
                        eventStart: result[0].eventStart,
                        eventEnd: result[0].eventEnd,
                        eventColor: result[0].eventColor,
                        eventDescription: result[0].eventDescription,
                        hasAssignment: result[0].hasAssignment,
                        organiserId: result[0].organiserId,
                        organiserName: result[0].organiserDetail.name,
                        attendees: result[0].attendees,
                    };
                    response.json(message("Students Reterived", events, true));
                }
            });
        }
        else if (result.role == "mentor") {
            eventDB.find({ organiserId: userID }).populate("organiserDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
                }
                else {
                    let events = {
                        eventName: result[0].eventName,
                        eventType: result[0].eventType,
                        eventStart: result[0].eventStart,
                        eventEnd: result[0].eventEnd,
                        eventColor: result[0].eventColor,
                        eventDescription: result[0].eventDescription,
                        hasAssignment: result[0].hasAssignment,
                        organiserId: result[0].organiserId,
                        organiserName: result[0].organiserDetail.name,
                        attendees: result[0].attendees,
                    };
                    response.json(message("Students Reterived", events, true));
                }
            });
        }
        else {
            eventDB.find({ attendees: { $elemMatch: { batchMember: { $elemMatch: { id: userID } } } } }).populate("organiserDetail").exec((errors, result) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15ZXZlbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50L2NvbnRyb2xsZXIvbGlzdG15ZXZlbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUduRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxNQUFNO1NBQ0gsT0FBTyxDQUNOLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUNYLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDdEMsQ0FBQztTQUNIO2FBQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDM0UsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLEVBQUUsTUFBTSxFQUFFLEtBQUss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