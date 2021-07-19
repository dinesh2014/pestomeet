import moment from 'moment';
import eventDB,{eventSchema} from "../event/schema/event-schema";
import { ACCOUNT_ID,AUTH_TOKEN,MSG_ID } from "../utils/app-constants";
import twilio from 'twilio';



const requireNotification = (appointment:any)=>{
    const searchDate = new Date();
    return Math.round(moment.duration(moment(appointment.eventStart).utc()
                          .diff(moment(searchDate).utc())
                        ).asMinutes()) < 15;

}

eventSchema.statics.sendNotifications = function(callback){
    eventDB.find({},(error:any,result:any) =>{
        if(error){
            console.log(error)
        }else if (!result){
            console.log("No events found")
        }else{
            const appointments = result.filter(requireNotification);
            if (appointments.length > 0) {
                 appointments.forEach((appointment:any)=>{
                     sendNotifications(appointment);
            })
        }
    }
})

const sendNotifications = (appointment:any)=>{
    const client = twilio(ACCOUNT_ID,AUTH_TOKEN);
    const Users = appointment.attendees
    Users.forEach(function(User:any) {
        const options = {
            body: "Hi "+User.name+ ", Pesto "+appointment.eventType +"Event will start on"+
                   appointment.eventStart + "Kindly Attend Without Fail",  
            messagingServiceSid: 'MGb12e410ab49d0e5949cafb04c85f3c9c',      
            to: User.phone 
        };

        // Send the message!
        client.messages.create(options, function(err, response) {
            if (err) {
                // Just log it for now
                console.error(err);
            } else {
                // Log the last few digits of a phone number
                console.log(`Notification sent to `+ options.to);
            }
        });
    });

    if (callback) {
        callback.call();
      }
}
}


export default eventDB