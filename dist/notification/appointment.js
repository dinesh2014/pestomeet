import moment from 'moment';
import eventDB, { eventSchema } from "../event/schema/event-schema";
import { ACCOUNT_ID, AUTH_TOKEN } from "../utils/app-constants";
import twilio from 'twilio';
const requireNotification = (appointment) => {
    const searchDate = new Date();
    return Math.round(moment.duration(moment(appointment.eventStart).utc()
        .diff(moment(searchDate).utc())).asMinutes()) < 15;
};
eventSchema.statics.sendNotifications = function (callback) {
    eventDB.find({}, (error, result) => {
        if (error) {
            console.log(error);
        }
        else if (!result) {
            console.log("No events found");
        }
        else {
            const appointments = result.filter(requireNotification);
            if (appointments.length > 0) {
                appointments.forEach((appointment) => {
                    sendNotifications(appointment);
                });
            }
        }
    });
    const sendNotifications = (appointment) => {
        const client = twilio(ACCOUNT_ID, AUTH_TOKEN);
        const Users = appointment.attendees;
        Users.forEach(function (User) {
            const options = {
                body: "Hi " + User.name + ", Pesto " + appointment.eventType + "Event will start on" +
                    appointment.eventStart + "Kindly Attend Without Fail",
                messagingServiceSid: 'MGb12e410ab49d0e5949cafb04c85f3c9c',
                to: User.phone
            };
            // Send the message!
            client.messages.create(options, function (err, response) {
                if (err) {
                    // Just log it for now
                    console.error(err);
                }
                else {
                    // Log the last few digits of a phone number
                    console.log(`Notification sent to ` + options.to);
                }
            });
        });
        if (callback) {
            callback.call();
        }
    };
};
export default eventDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ub3RpZmljYXRpb24vYXBwb2ludG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sT0FBTyxFQUFDLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBQyxVQUFVLEVBQVMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFJNUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFdBQWUsRUFBQyxFQUFFO0lBQzNDLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUU7U0FDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUNoQyxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTVDLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsVUFBUyxRQUFRO0lBQ3JELE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsS0FBUyxFQUFDLE1BQVUsRUFBRSxFQUFFO1FBQ3JDLElBQUcsS0FBSyxFQUFDO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyQjthQUFLLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDakM7YUFBSTtZQUNELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBZSxFQUFDLEVBQUU7b0JBQ3BDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQTthQUNMO1NBQ0o7SUFDTCxDQUFDLENBQUMsQ0FBQTtJQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxXQUFlLEVBQUMsRUFBRTtRQUN6QyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUE7UUFDbkMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQVE7WUFDM0IsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osSUFBSSxFQUFFLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLFVBQVUsR0FBQyxXQUFXLENBQUMsU0FBUyxHQUFFLHFCQUFxQjtvQkFDdkUsV0FBVyxDQUFDLFVBQVUsR0FBRyw0QkFBNEI7Z0JBQzVELG1CQUFtQixFQUFFLG9DQUFvQztnQkFDekQsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ2pCLENBQUM7WUFFRixvQkFBb0I7WUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBRyxFQUFFLFFBQVE7Z0JBQ2xELElBQUksR0FBRyxFQUFFO29CQUNMLHNCQUFzQjtvQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0gsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakI7SUFDUCxDQUFDLENBQUE7QUFDRCxDQUFDLENBQUE7QUFHRCxlQUFlLE9BQU8sQ0FBQSJ9