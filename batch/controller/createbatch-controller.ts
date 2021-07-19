import batchDB from "../schema/batch-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";


const CreatebatchController = (reqest: any, response: any) => {
  const { batchName, batchType, batchOwner, batchMembers } = reqest.body;
  const newBatch = new batchDB({
    batchName: batchName.toLowerCase(),
    batchType: batchType,
    batchOwner: batchOwner,
    batchMembers: batchMembers,
  });

  batchDB.findOne(
    { batchName: batchName.toLowerCase() },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while creating batch, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newBatch.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Batch Created Successfully", null, true));
          }
        });
      } else {
        response.json(message("Batch name is already taken", null, false));
      }
    }
  );
};

export default CreatebatchController;
