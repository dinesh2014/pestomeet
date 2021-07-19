import mongoose from "mongoose";
import { DB_RESOURCE_MODEL } from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";

interface IResource {
  resourceId: string;
  resourceName: string;
  uploaderId: string;
  uploaderName: string;
  eventID: string;
  eventName: string;
  eventType: string;
  resource: string;
  resourceKey: string;
  lastupdateTime: { type: Date };
}

const resourceSchema = new mongoose.Schema<IResource>({
  resourceId: { type: String, required: true,default: () => uuidv4() },
  resourceName: { type: String, required: true },
  uploaderId: { type: String, required: true },
  uploaderName: { type: String, required: true },
  eventID: { type: String, required: true },
  eventName: { type: String, required: true },
  eventType: { type: String, require: true },
  assignment: { type: String, require: true },
  resource: { type: String, require: true },
  resourceKey: { type: String, require: true },
  lastupdateTime: { type: Date, default: Date.now },
});

const resourceModel = mongoose.model(DB_RESOURCE_MODEL, resourceSchema);
export default resourceModel;
