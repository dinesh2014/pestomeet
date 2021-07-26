import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";
/* This module serves as the controller for the API "api/pesto/list/mybatch/" which get userID
as a params and list batches based on userrole */
const ListMyTeamController = (request, response) => {
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
            teamDB.find({}, (errors, result) => {
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
                    let batch = result.map((member, index) => {
                        return member.batchId;
                    });
                    teamDB.find({ batchId: { $in: batch } }, (errors, result) => {
                        if (errors) {
                            response.json(message("Error while reteriving Batch", errors, false));
                        }
                        else if (result.length == 0) {
                            response.json(message("No Batch Found", null, false));
                        }
                        else {
                            response.json(message("Teams Found", result, false));
                        }
                    });
                }
            });
        }
        else if (result.role == "mentor") {
            teamDB.find({ mentorId: userID }, (errors, result) => {
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
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default ListMyTeamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15dGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2xpc3RteXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQ7aURBQ2lEO0FBRWpELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsTUFBTTtTQUNILE9BQU8sQ0FDTixFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFDWCxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3RDLENBQUM7U0FDSDthQUFNLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksTUFBTSxFQUFFO29CQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxLQUFL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