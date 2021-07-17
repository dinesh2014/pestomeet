import resourceSchema from "../schema/resource-schema";
import { message } from "../../utils/response-format";
import { S3, BUCKET } from "../../utils/app-constants";
const DeleteresourceController = (request, response) => {
    const resourceId = request.body.resourceId;
    resourceSchema.findOne({ resourceId: resourceId }, (errors, docs) => {
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
                    resourceSchema.deleteOne({ resourceId: resourceId }, (errors) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9jb250cm9sbGVyL2RlbGV0ZXJlc291cmNlLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdkQsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUMvRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQyxjQUFjLENBQUMsT0FBTyxDQUNwQixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFDMUIsQ0FBQyxNQUFXLEVBQUUsSUFBUyxFQUFFLEVBQUU7UUFDekIsSUFBSSxNQUFNLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RTthQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDaEIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLEVBQUUsQ0FBQyxZQUFZLENBQ2I7Z0JBQ0UsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQ3RCLEVBQ0QsVUFBVSxNQUFXLEVBQUUsSUFBUztnQkFDOUIsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUN6RCxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLGNBQWMsQ0FBQyxTQUFTLENBQ3RCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUMxQixDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUNULElBQUksTUFBTSxFQUFFOzRCQUNWLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FDekQsQ0FBQzt5QkFDSDs2QkFBTTs0QkFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQ3hELENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUNGLENBQUM7aUJBQ0g7WUFDSCxDQUFDLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLHdCQUF3QixDQUFDIn0=