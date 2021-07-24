import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_BATCH_MODEL } from "../../utils/app-constants";

interface IBatch {
  batchId: string;
  batchName: string;
  batchType: string;
  batchOwner: string;
  batchMembers: Array<Object>;
  lastupdateTime: { type: Date };
}

const batchSchema = new mongoose.Schema<IBatch>({
  batchId: { type: String, required: true,default: () => uuidv4() },
  batchName: { type: String, required: true },
  batchType: { type: String, required: true },
  batchOwner: { type: String, require: true },
  batchMembers: { type: Array, required: true },
  lastupdateTime: { type: Date, default: Date.now },
});
const batchModel = mongoose.model(DB_BATCH_MODEL, batchSchema);
export default batchModel;
