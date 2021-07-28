import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
import { S3, BUCKET } from "../../utils/app-constants";

const DeleteresourceController = (request: any, response: any) => {
  const resourceId = request.body.resourceId;
  resourceDB.findOne(
    { resourceId: resourceId },
    (errors: any, docs: any) => {
      if (errors) {
        response.json(message("Error while deleting Resource", errors, false));
      } else if (!docs) {
        response.json(message("Resource Not Found", docs, false));
      } else {
        S3.deleteObject(
          {
            Bucket: BUCKET,
            Key: docs.resourceKey,
          },
          function (errors: any, data: any) {
            if (errors) {
              response.json(
                message("Error while deleting Resource ", errors, false)
              );
            } else {
              resourceDB.deleteOne(
                { resourceId: resourceId },
                (errors) => {
                  if (errors) {
                    response.json(
                      message("Error while deleting Resource ", errors, false)
                    );
                  } else {
                    response.json(
                      message("Resource deleted Successfully", errors, true)
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

export default DeleteresourceController;
