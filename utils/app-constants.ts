import aws from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

export const DB_USER_MODEL = "userModel";
export const DB_BATCH_MODEL = "batchModel";
export const DB_TEAM_MODEL = "teamModel";
export const DB_RESOURCE_MODEL = "resourceModel";
export const DB_EVENT_MODEL = "eventModel"

export const S3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

export const BUCKET = "pestomeet-recordings";
export const PROFILE_FOLDER = "profile-pics";
export const MASTERCLASS_FOLDER = "masterclass-videos";

export const ACCOUNT_ID = 'AC6ecec09e01c371ecd96fa2f8bab4d386'; 
export const AUTH_TOKEN = '8a50c5596e5c4cf5f2ad103bf555bc50'; 
export const MSG_ID ='MGb12e410ab49d0e5949cafb04c85f3c9c'
