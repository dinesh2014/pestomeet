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
                Key: resourceKey
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9jb250cm9sbGVyL2RlbGV0ZXJlc291cmNlLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFckQsTUFBTSx3QkFBd0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM3RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFDLENBQUMsTUFBVyxFQUFFLElBQVMsRUFBRSxFQUFFO1FBQzFFLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0JBQStCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNaLE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxXQUFXO2FBQ2pCLEVBQUMsVUFBVSxNQUFVLEVBQUMsSUFBUTtnQkFDM0IsSUFBRyxNQUFNLEVBQUM7b0JBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3pFO3FCQUFJO29CQUNILGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTt3QkFDN0QsSUFBRyxNQUFNLEVBQUM7NEJBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQzNFOzZCQUFJOzRCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUMxRTtvQkFDTCxDQUFDLENBQUMsQ0FBQTtpQkFDSDtZQUVMLENBQUMsQ0FBQyxDQUFBO1NBRUw7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGVBQWUsd0JBQXdCLENBQUMifQ==