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
            teamDB.find({}).populate("batchDetail").populate("mentorDetail").exec(function (errors, result) {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Team Found", null, false));
                }
                else {
                    let adminTeam = result.map((items) => {
                        return {
                            teamId: items.teamId,
                            teamName: items.teamName,
                            teamType: items.teamType,
                            batchId: items.batchId,
                            batchName: items.batchDetail.batchName,
                            batchOwner: items.batchDetail.batchOwner,
                            batchOwnerID: items.batchOwnerID,
                            mentorId: items.mentorId,
                            mentorName: items.mentorDetail.name,
                            teamMembers: items.teamMembers
                        };
                    });
                    response.json(message("Team Reterived for Super Admin", adminTeam, true));
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
                    teamDB.find({ batchId: { $in: batch } }).populate("batchDetail").populate("mentorDetail").exec((errors, result) => {
                        if (errors) {
                            response.json(message("Error while reteriving Batch", errors, false));
                        }
                        else if (result.length == 0) {
                            response.json(message("No Batch Found", null, false));
                        }
                        else {
                            let adminTeam = result.map((items) => {
                                return {
                                    teamId: items.teamId,
                                    teamName: items.teamName,
                                    teamType: items.teamType,
                                    batchId: items.batchId,
                                    batchName: items.batchDetail.batchName,
                                    batchOwner: items.batchDetail.batchOwner,
                                    batchOwnerID: items.batchOwnerID,
                                    mentorId: items.mentorId,
                                    mentorName: items.mentorDetail.name,
                                    teamMembers: items.teamMembers
                                };
                            });
                            response.json(message("Team Found", adminTeam, false));
                        }
                    });
                }
            });
        }
        else if (result.role == "mentor") {
            teamDB.find({ mentorId: userID }).populate("batchDetail").populate("mentorDetail").exec((errors, result) => {
                if (errors) {
                    response.json(message("Error while reteriving Batch", errors, false));
                }
                else if (result.length == 0) {
                    response.json(message("No Batch Found", null, false));
                }
                else {
                    let adminTeam = result.map((items) => {
                        return {
                            teamId: items.teamId,
                            teamName: items.teamName,
                            teamType: items.teamType,
                            batchId: items.batchId,
                            batchName: items.batchDetail.batchName,
                            batchOwner: items.batchDetail.batchOwner,
                            batchOwnerID: items.batchOwnerID,
                            mentorId: items.mentorId,
                            mentorName: items.mentorDetail.name,
                            teamMembers: items.teamMembers
                        };
                    });
                    response.json(message("Batches Reterived", adminTeam, true));
                }
            });
        }
        else {
            response.json(message("Not Applicable for Students", null, false));
        }
    });
};
export default ListMyTeamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdG15dGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2xpc3RteXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLE9BQU8sTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RCxPQUFPLE1BQU0sTUFBTSwrQkFBK0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEQ7aURBQ2lEO0FBRWpELE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxPQUFZLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDckMsTUFBTTtTQUNILE9BQU8sQ0FDTixFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFDWCxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMzQixJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQ3RDLENBQUM7U0FDSDthQUFNLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLE1BQVcsRUFBRSxNQUFXO2dCQUNuRyxJQUFJLE1BQU0sRUFBRTtvQkFDVixR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