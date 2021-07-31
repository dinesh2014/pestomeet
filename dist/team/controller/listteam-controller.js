import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";
const ListteamController = (request, response) => {
    const teamType = request.params.type;
    teamDB.find({ teamType: teamType.toLowerCase() }).populate("batchDetail").populate("mentorDetail").exec((errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving team", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No " + String(teamType) + " Team found", null, false));
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
            response.json(message(String(result.length) + " " + String(teamType) + " Teams Found", adminTeam, true));
        }
    });
};
export default ListteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHRlYW0tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RlYW0vY29udHJvbGxlci9saXN0dGVhbS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLHVCQUF1QixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQ3pELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUN2SCxJQUFJLE1BQU0sRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQy9ELENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBQyxFQUFFO2dCQUNsQyxPQUFPO29CQUNMLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtvQkFDcEIsUUFBUSxFQUFDLEtBQUssQ0FBQyxRQUFRO29CQUN2QixRQUFRLEVBQUMsS0FBSyxDQUFDLFFBQVE7b0JBQ3ZCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsU0FBUyxFQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUztvQkFDckMsVUFBVSxFQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVTtvQkFDdkMsWUFBWSxFQUFDLEtBQUssQ0FBQyxZQUFZO29CQUMvQixRQUFRLEVBQUMsS0FBSyxDQUFDLFFBQVE7b0JBQ3ZCLFVBQVUsRUFBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7b0JBQ2xDLFdBQVcsRUFBQyxLQUFLLENBQUMsV0FBVztpQkFBQyxDQUFBO1lBQ2xDLENBQUMsQ0FBQyxDQUFBO1lBRUYsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGNBQWMsRUFDL0QsU0FBUyxFQUNULElBQUksQ0FDTCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxrQkFBa0IsQ0FBQyJ9