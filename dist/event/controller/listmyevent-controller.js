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
            eventDB.find({}).populate("organiserDetail").exec(function (errors, result) {
                if (errors) {
                    response.json(message("Error while reteriving Events", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Events Found", null, false));
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
                    response.json(message("Events Reterived", events, true));
                }
            });
        }
    });
};
export default ListMyEventController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15ZXZlbnQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V2ZW50L2NvbnRyb2xsZXIvbGlzdG15ZXZlbnQtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxNQUFNO1NBQ0gsT0FBTyxDQUNOLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUNYLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDdEMsQ0FBQztTQUNIO2FBQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQVcsRUFBRSxNQUFXO2dCQUMvRSxJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMs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