import registerBatch from '../schema/batch-schema';
import { v4 as uuidv4 } from 'uuid';
import { message } from '../../utils/response-format';
const batchId = uuidv4();
const CreatebatchController = (reqest, response) => {
    const { batchName, batchType, batchOwner, batchMembers } = reqest.body;
    const newBatch = new registerBatch({ "batchId": batchId, "batchName": batchName.toLowerCase(), "batchType": batchType, "batchOwner": batchOwner, "batchMembers": batchMembers });
    registerBatch.findOne({ 'batchName': batchName.toLowerCase() }, (error, result) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvY3JlYXRlYmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQTtBQUNsRCxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sNkJBQTZCLENBQUE7QUFHbkQsTUFBTSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDekIsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQVUsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUV6RCxNQUFNLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUE7SUFFckssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFdBQVcsRUFBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFBQyxDQUFDLEtBQVMsRUFBQyxNQUFVLEVBQUMsRUFBRTtRQUNoRixJQUFHLEtBQUssRUFBQztZQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtEQUFrRCxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3RGO2FBQUssSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFTLEVBQUMsTUFBVSxFQUFDLEVBQUU7Z0JBQzFCLElBQUksS0FBSyxFQUFDO29CQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztpQkFBRTtxQkFDeEM7b0JBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBQUM7WUFBQSxDQUFDLENBQUMsQ0FBQTtTQUNuRjthQUFJO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDakU7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQTtBQUVELGVBQWUscUJBQXFCLENBQUMifQ==