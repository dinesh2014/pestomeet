import resourceDB from "../schema/resource-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";
import masterClassUpload from "../../utils/s3-masterclass";

const ResourceController = (request: any, response: any) => {
  masterClassUpload(request, response, (error) => {
    if (error) {
      response.json({ error: error });
    } else {
      // If File not found
      if (request.file === undefined) {
        response.json("Error: No File Selected");
      } else {
        const resource = request.file.location;
        const resourceKey = request.file.key;
        const {
          resourceName,
          uploaderId,
          uploaderName,
          eventID,
          eventName,
          eventType,
        } = request.body;
        const newBatch = new resourceDB({
          resourceName: resourceName.toLowerCase(),
          uploaderId: uploaderId,
          uploaderName: uploaderName.toLowerCase(),
          eventID: eventID,
          eventName: eventName.toLowerCase(),
          eventType: eventType.toLowerCase(),
          resourceKey: resourceKey,
          resource: resource,
        });
        resourceDB.findOne(
          { resourceKey: resourceKey },
          (error: any, result: any) => {
            if (error) {
              response.json(
                message(
                  "Error Happened while uploading resources, Try Again !",
                  null,
                  false
                )
              );
            } else if (!result) {
              newBatch.save((error: any, result: any) => {
                if (error) {
                  response.json({ message: error });
                } else {
                  response.json(
                    message("Resource Uploaded Successfully", result, true)
                  );
                }
              });
            } else {
              response.json(message("Resource already found", null, false));
            }
          }
        );
      }
    }
  });
};
export default ResourceController;
