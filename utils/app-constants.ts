import aws from "aws-sdk";

export const DB_USER_MODEL = "userModel";
export const DB_BATCH_MODEL = "batchModel";
export const DB_TEAM_MODEL = "teamModel";
export const DB_RESOURCE_MODEL = "resourceModel";

export const S3 = new aws.S3({
  accessKeyId: "AKIAXCQP2ZQ6ODC2DO6N",
  secretAccessKey: "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",
  region: "ap-south-1",
});

export const BUCKET = "pestomeet-recordings";
export const PROFILE_FOLDER = "profile-pics";
export const MASTERCLASS_FOLDER = "masterclass-videos";
