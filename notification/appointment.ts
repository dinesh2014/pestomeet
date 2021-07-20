import moment from 'moment';
import mongoose  from 'mongoose';
import { tz } from 'moment-timezone';
import eventDB,{eventSchema} from "../event/schema/event-schema";
import { ACCOUNT_ID,AUTH_TOKEN,MSG_ID,COUNTRY_CODE} from "../utils/app-constants";
import twilio from 'twilio';



const requireNotification = (appointment:any)=>{
    const searchDate = moment(new Date()).tz("Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6").format()
    const eventDate = moment(appointment.eventStart).tz("Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6").format()
    let time = Math.round(moment.duration(moment(eventDate).utc().diff(moment(searchDate).utc())
  ).asMinutes()) === 15;
    console.log(time);
    console.log(searchDate)
    console.log(eventDate)
    return time;

}

eventSchema.statics.sendNotifications = (callback)=>{
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
            messagingServiceSid: MSG_ID,      
            to: COUNTRY_CODE+User.phone 
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

export default eventSchema.statics.sendNotifications