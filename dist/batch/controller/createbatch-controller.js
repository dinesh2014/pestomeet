import batchDB from "../schema/batch-schema";
import { message } from "../../utils/response-format";
const CreatebatchController = (reqest, response) => {
    const { batchName, batchType, batchOwner, batchMembers } = reqest.body;
    const newBatch = new batchDB({
        batchName: batchName.toLowerCase(),
        batchType: batchType,
        batchOwner: batchOwner,
        batchMembers: batchMembers,
    });
    batchDB.findOne({ batchName: batchName.toLowerCase() }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while creating batch, Try Again !", null, false));
        }
        else if (!result) {
            newBatch.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Batch Created Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Batch name is already taken", null, false));
        }
    });
};
export default CreatebatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvY3JlYXRlYmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN2RSxNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztRQUMzQixTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsVUFBVTtRQUN0QixZQUFZLEVBQUUsWUFBWTtLQUMzQixDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsT0FBTyxDQUNiLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUN0QyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLGtEQUFrRCxFQUNsRCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztTQUNIO2FBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLEtBQUssRUFBRTtvQkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNsRTtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLHFCQUFxQixDQUFDIn0=