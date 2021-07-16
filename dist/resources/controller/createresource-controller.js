import resourceSchema from "../schema/resource-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";
import masterClassUpload from "../../utils/s3-masterclass";
const resourceId = uuidv4();
const ResourceController = (request, response) => {
    masterClassUpload(request, response, (error) => {
        if (error) {
            response.json({ error: error });
        }
        else {
            // If File not found
            if (request.file === undefined) {
                response.json("Error: No File Selected");
            }
            else {
                const resource = request.file.location;
                const resourceKey = request.file.key;
                const { resourceName, uploaderId, uploaderName, eventID, eventName, eventType, } = request.body;
                const newBatch = new resourceSchema({
                    resourceId: resourceId,
                    resourceName: resourceName.toLowerCase(),
                    uploaderId: uploaderId,
                    uploaderName: uploaderName.toLowerCase(),
                    eventID: eventID,
                    eventName: eventName.toLowerCase(),
                    eventType: eventType.toLowerCase(),
                    resourceKey: resourceKey,
                    resource: resource,
                });
                resourceSchema.findOne({ resourceKey: resourceKey }, (error, result) => {
                    if (error) {
                        response.json(message("Error Happened while uploading resources, Try Again !", null, false));
                    }
                    else if (!result) {
                        newBatch.save((error, result) => {
                            if (error) {
                                response.json({ message: error });
                            }
                            else {
                                response.json(message("Resource Uploaded Successfully", result, true));
                            }
                        });
                    }
                    else {
                        response.json(message("Resource already found", null, false));
                    }
                });
            }
        }
    });
};
export default ResourceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlcy9jb250cm9sbGVyL2NyZWF0ZXJlc291cmNlLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxjQUFjLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RELE9BQU8saUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFFM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUN6RCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLG9CQUFvQjtZQUNwQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUM5QixRQUFRLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNyQyxNQUFNLEVBQ0osWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osT0FBTyxFQUNQLFNBQVMsRUFDVCxTQUFTLEdBQ1YsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQztvQkFDbEMsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUN4QyxVQUFVLEVBQUUsVUFBVTtvQkFDdEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxXQUFXLEVBQUU7b0JBQ3hDLE9BQU8sRUFBRSxPQUFPO29CQUNoQixTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtvQkFDbEMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUU7b0JBQ2xDLFdBQVcsRUFBRSxXQUFXO29CQUN4QixRQUFRLEVBQUUsUUFBUTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILGNBQWMsQ0FBQyxPQUFPLENBQ3BCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUM1QixDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsdURBQXVELEVBQ3ZELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO3FCQUNIO3lCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7NEJBQ3hDLElBQUksS0FBSyxFQUFFO2dDQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs2QkFDbkM7aUNBQU07Z0NBQ0wsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUN4RCxDQUFDOzZCQUNIO3dCQUNILENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUMvRDtnQkFDSCxDQUFDLENBQ0YsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGLGVBQWUsa0JBQWtCLENBQUMifQ==