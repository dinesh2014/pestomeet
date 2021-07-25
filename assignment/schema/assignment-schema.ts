import mongoose from "mongoose";
import { DB_ASSIGNMENT_MODEL } from "../../utils/app-constants";
import { v4 as uuidv4 } from "uuid";

interface IAssignment {
  assignmentId: string;
  assignmentName: string;
  uploaderId: string;
  uploaderName: string;
  eventID: string;
  eventName: string;
  eventType: string;
  assignmentLinks:Array<String>;
  lastupdateTime: { type: Date };
}

const assignmentSchema = new mongoose.Schema<IAssignment>({
  assignmentId: { type: String, required: true,default: () => uuidv4() },
  assignmentName: { type: String, required: true },
  uploaderId: { type: String, required: true },
  uploaderName: { type: String, required: true },
  eventID: { type: String, required: true },
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  assignmentLinks:{type:Array, require: true },
  lastupdateTime: { type: Date, default: Date.now },
});

const assignmentModel = mongoose.model(DB_ASSIGNMENT_MODEL, assignmentSchema);
export default assignmentModel;
