import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_ANNOUNCEMENT_MODEL } from "../../utils/app-constants";

export interface IAnnouncement {
  announcementId: string;
  announcementName: string;
  announcementDescription:string;
  lastupdateTime:Date ;
}

export const announcementSchema = new mongoose.Schema<IAnnouncement>({
    announcementId: { type: String, required: true,default: () => uuidv4()},
    announcementName: { type: String, required: true },
    announcementDescription:{ type: String},
    announcementTime: { type: Date, default: Date.now },
});

const eventModel = mongoose.model(DB_ANNOUNCEMENT_MODEL, announcementSchema);
export default eventModel;
