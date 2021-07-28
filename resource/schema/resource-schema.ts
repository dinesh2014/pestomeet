import mongoose from "mongoose";
import { DB_RESOURCE_MODEL } from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";

interface IResource {
  resourceId: string;
  resourceName: string;
  uploaderId: string;
  uploaderName: string;
  eventId: string;
  eventName: string;
  eventType: string;
  resource: string;
  resourceLinks:Array<String>
  resourceKey: string;
  lastupdateTime: { type: Date };
}

const resourceSchema = new mongoose.Schema<IResource>({
  resourceId: { type: String, required: true,default: () => uuidv4() },
  resourceName: { type: String, required: true },
  uploaderId: { type: String, required: true },
  uploaderName: { type: String, required: true },
  eventId: { type: String, required: true },
  eventName: { type: String, required: true },
  eventType: { type: String, require: true },
  resource: { type: String, required: true },
  resourceLinks:{type:Array},
  resourceKey: { type: String, required: true },
  lastupdateTime: { type: Date, default: Date.now },
});

const resourceModel = mongoose.model(DB_RESOURCE_MODEL, resourceSchema);
export default resourceModel;
