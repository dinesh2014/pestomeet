import aws from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();

export const DB_USER_MODEL = "userModel";
export const DB_BATCH_MODEL = "batchModel";
export const DB_TEAM_MODEL = "teamModel";
export const DB_RESOURCE_MODEL = "resourceModel";

export const S3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

export const BUCKET = "pestomeet-recordings";
export const PROFILE_FOLDER = "profile-pics";
export const MASTERCLASS_FOLDER = "masterclass-videos";
