import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_EVENT_MODEL } from "../../utils/app-constants";

export interface IEvent {
  eventId: string;
  eventName: string;
  eventDescription:string;
  eventType: string;
  eventStart:Date;
  eventEnd:Date;
  eventColor:String;
  attendees: Array<Object>;
  hasAssignment:Boolean;
  lastupdateTime:Date ;
}

export const eventSchema = new mongoose.Schema<IEvent>({
    eventId: { type: String, required: true,default: () => uuidv4()},
    eventName: { type: String, required: true },
    eventDescription:{ type: String},
    eventType: { type: String, required: true },
    eventStart: { type: String, required: true },
    eventEnd: { type: String, required: true },
    eventColor:{ type: String, required: true },
    organiserId:{ type: String, required: true },
    organiserName:{ type: String, required: true },
    attendees: { type: Array, required: true},
    hasAssignment:{ type: Boolean, required: true},
    lastupdateTime: { type: Date, default: Date.now },
});

const eventModel = mongoose.model(DB_EVENT_MODEL, eventSchema);
export default eventModel;
