import moment from 'moment';
import eventDB, { eventSchema } from "../event/schema/event-schema";
import { ACCOUNT_ID, AUTH_TOKEN, MSG_ID, COUNTRY_CODE } from "../utils/app-constants";
import twilio from 'twilio';
const requireNotification = (appointment) => {
    const searchDate = moment(new Date()).tz("Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6").format();
    const eventDate = moment(appointment.eventStart).tz("Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6").format();
    let time = Math.round(moment.duration(moment(eventDate).utc().diff(moment(searchDate).utc())).asMinutes()) === 15;
    console.log(time);
    console.log(searchDate);
    console.log(eventDate);
    return time;
};
eventSchema.statics.sendNotifications = (callback) => {
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
                messagingServiceSid: MSG_ID,
                to: COUNTRY_CODE + User.phone
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
export default eventSchema.statics.sendNotifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ub3RpZmljYXRpb24vYXBwb2ludG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRzVCLE9BQU8sT0FBTyxFQUFDLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2xGLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUk1QixNQUFNLG1CQUFtQixHQUFHLENBQUMsV0FBZSxFQUFDLEVBQUU7SUFDM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMscUZBQXFGLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN4SSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxxRkFBcUYsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25KLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUM3RixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3RCLE9BQU8sSUFBSSxDQUFDO0FBRWhCLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxRQUFRLEVBQUMsRUFBRTtJQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLEtBQVMsRUFBQyxNQUFVLEVBQUUsRUFBRTtRQUNyQyxJQUFHLEtBQUssRUFBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7YUFBSyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1NBQ2pDO2FBQUk7WUFDRCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEQsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQWUsRUFBQyxFQUFFO29CQUNwQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUE7YUFDTDtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixNQUFNLGlCQUFpQixHQUFHLENBQUMsV0FBZSxFQUFDLEVBQUU7UUFDekMsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFBO1FBQ25DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFRO1lBQzNCLE1BQU0sT0FBTyxHQUFHO2dCQUNaLElBQUksRUFBRSxLQUFLLEdBQUMsSUFBSSxDQUFDLElBQUksR0FBRSxVQUFVLEdBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRSxxQkFBcUI7b0JBQ3ZFLFdBQVcsQ0FBQyxVQUFVLEdBQUcsNEJBQTRCO2dCQUM1RCxtQkFBbUIsRUFBRSxNQUFNO2dCQUMzQixFQUFFLEVBQUUsWUFBWSxHQUFDLElBQUksQ0FBQyxLQUFLO2FBQzlCLENBQUM7WUFFRixvQkFBb0I7WUFDcEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBRyxFQUFFLFFBQVE7Z0JBQ2xELElBQUksR0FBRyxFQUFFO29CQUNMLHNCQUFzQjtvQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdEI7cUJBQU07b0JBQ0gsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDcEQ7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakI7SUFDUCxDQUFDLENBQUE7QUFDRCxDQUFDLENBQUE7QUFFRCxlQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUEifQ==