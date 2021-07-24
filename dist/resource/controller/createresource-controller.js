import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";
import masterClassUpload from "../../utils/s3-masterclass";
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
                resourceDB.findOne({ resourceKey: resourceKey }, (error, result) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlcmVzb3VyY2UtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Jlc291cmNlL2NvbnRyb2xsZXIvY3JlYXRlcmVzb3VyY2UtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSwyQkFBMkIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxpQkFBaUIsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ3pELGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUM3QyxJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsb0JBQW9CO1lBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdkMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ3JDLE1BQU0sRUFDSixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixPQUFPLEVBQ1AsU0FBUyxFQUNULFNBQVMsR0FDVixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDO29CQUM5QixZQUFZLEVBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRTtvQkFDeEMsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLFlBQVksRUFBRSxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUN4QyxPQUFPLEVBQUUsT0FBTztvQkFDaEIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUU7b0JBQ2xDLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFO29CQUNsQyxXQUFXLEVBQUUsV0FBVztvQkFDeEIsUUFBUSxFQUFFLFFBQVE7aUJBQ25CLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsT0FBTyxDQUNoQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFDNUIsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7b0JBQzFCLElBQUksS0FBSyxFQUFFO3dCQUNULFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLHVEQUF1RCxFQUN2RCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztxQkFDSDt5QkFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFOzRCQUN4QyxJQUFJLEtBQUssRUFBRTtnQ0FDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7NkJBQ25DO2lDQUFNO2dDQUNMLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FDeEQsQ0FBQzs2QkFDSDt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDL0Q7Z0JBQ0gsQ0FBQyxDQUNGLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFDRixlQUFlLGtCQUFrQixDQUFDIn0=