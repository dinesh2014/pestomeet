import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import { message } from "../../utils/response-format";
const ListMyBatchController = (request, response) => {
    const userID = request.params.userID;
    userDB
        .findOne({ id: userID }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result == null) {
            response.json(message("No User Found", null, false));
        }
        else if (result.role == "super admin") {
            batchDB.find({}, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Batch Found", null, false));
                }
                else {
                    response.json(message("Batch Reterived", result, true));
                }
            });
        }
        else if (result.role == "admin") {
            batchDB.find({ batchOwnerID: userID }, (errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Batch Found", null, false));
                }
                else {
                    response.json(message("Batches Reterived", result, true));
                }
            });
        }
        else if (result.role == "mentor") {
            response.json(message("Not Applicable for Mentors", null, false));
        }
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default ListMyBatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15YmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvbGlzdG15YmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxNQUFNO1NBQ0gsT0FBTyxDQUNOLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQyxFQUNYLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEU7YUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDdEMsQ0FBQztTQUNIO2FBQU0sSUFBRyxNQUFNLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFO3FCQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO2lCQUN0RDtxQkFBSTtvQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtpQkFDMUQ7WUFDTCxDQUFDLENBQUMsQ0FBQTtTQUNMO2FBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBQztZQUM3QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsWUFBWSxFQUFDLE1BQU0sRUFBQyxFQUFDLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdkU7cUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7aUJBQ3REO3FCQUFJO29CQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO2lCQUM1RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFDO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3BFO2FBQUk7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUNyRTtJQUNILENBQUMsQ0FDRixDQUFBO0FBRUwsQ0FBQyxDQUFDO0FBRUYsZUFBZSxxQkFBcUIsQ0FBQyJ9