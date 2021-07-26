import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_TEAM_MODEL } from "../../utils/app-constants";
import dotenv from "dotenv"
dotenv.config();

interface ITeam {
  teamId: string;
  teamName: string;
  teamType: string;
  batchId:string,
  mentorId: string;
  mentorName: string;
  teamMembers: Array<Object>;
  lastupdateTime: { type: Date };
}

const teamSchema = new mongoose.Schema<ITeam>({
  teamId: { type: String, required: true,default: () => uuidv4()},
  teamName: { type: String, required: true },
  teamType: { type: String, required: true },
  batchId:  {type:String,required:true},
  mentorId: { type: String, required: true },
  mentorName: { type: String, required: true },
  teamMembers: { type: Array, required: true },
  lastupdateTime: { type: Date, default: Date.now },
});

const teamModel = mongoose.model(DB_TEAM_MODEL, teamSchema);
export default teamModel;
