import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
import { S3, BUCKET } from "../../utils/app-constants";
const DeleteresourceController = (request, response) => {
    const resourceId = request.body.resourceId;
    resourceDB.findOne({ resourceId: resourceId }, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting Resource", errors, false));
        }
        else if (!docs) {
            response.json(message("Resource Not Found", docs, false));
        }
        else {
            S3.deleteObject({
                Bucket: BUCKET,
                Key: docs.resourceKey,
            }, function (errors, data) {
                if (errors) {
                    response.json(message("Error while deleting Resource ", errors, false));
                }
                else {
                    resourceDB.deleteOne({ resourceId: resourceId }, (errors) => {
                        if (errors) {
                            response.json(message("Error while deleting Resource ", errors, false));
                        }
                        else {
                            response.json(message("Resource deleted Successfully", errors, false));
                        }
                    });
                }
            });
        }
    });
};
export default DeleteresourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlL2NvbnRyb2xsZXIvZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RCxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQy9ELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNDLFVBQVUsQ0FBQyxPQUFPLENBQ2hCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUMxQixDQUFDLE1BQVcsRUFBRSxJQUFTLEVBQUUsRUFBRTtRQUN6QixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO2FBQU0sSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0wsRUFBRSxDQUFDLFlBQVksQ0FDYjtnQkFDRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDdEIsRUFDRCxVQUFVLE1BQVcsRUFBRSxJQUFTO2dCQUM5QixJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3pELENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsVUFBVSxDQUFDLFNBQVMsQ0FDbEIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQzFCLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQ1QsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUN6RCxDQUFDO3lCQUNIOzZCQUFNOzRCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDeEQsQ0FBQzt5QkFDSDtvQkFDSCxDQUFDLENBQ0YsQ0FBQztpQkFDSDtZQUNILENBQUMsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsd0JBQXdCLENBQUMifQ==