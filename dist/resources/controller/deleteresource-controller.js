import resourceSchema from "../schema/resource-schema";
import { message } from "../../utils/response-format";
import { S3, BUCKET } from "../../utils/app-constants";
const DeleteresourceController = (request, response) => {
    const resourceKey = request.body.resourceKey;
    resourceSchema.find({ resourceKey: resourceKey }, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting Resource", errors, false));
        }
        else if (!docs) {
            response.json(message("Resource Not Found", docs, false));
        }
        else {
            S3.deleteObject({
                Bucket: BUCKET,
                Key: resourceKey,
            }, function (errors, data) {
                if (errors) {
                    response.json(message("Error while deleting Resource ", errors, false));
                }
                else {
                    resourceSchema.deleteOne({ resourceKey: resourceKey }, (errors) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9jb250cm9sbGVyL2RlbGV0ZXJlc291cmNlLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUMvRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxjQUFjLENBQUMsSUFBSSxDQUNqQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFDNUIsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLEVBQUU7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLEVBQUUsQ0FBQyxZQUFZLENBQ2I7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRyxFQUFFLFdBQVc7YUFDakIsRUFDRCxVQUFVLE1BQVcsRUFBRSxJQUFTO2dCQUM5QixJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxnQ0FBZ0MsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3pELENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsY0FBYyxDQUFDLFNBQVMsQ0FDdEIsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQzVCLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQ1QsSUFBSSxNQUFNLEVBQUU7NEJBQ1YsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUN6RCxDQUFDO3lCQUNIOzZCQUFNOzRCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDeEQsQ0FBQzt5QkFDSDtvQkFDSCxDQUFDLENBQ0YsQ0FBQztpQkFDSDtZQUNILENBQUMsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsd0JBQXdCLENBQUMifQ==