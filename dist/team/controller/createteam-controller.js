import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";
const RegisterteamController = (request, response) => {
    const { teamName, teamType, batchId, mentorId, mentorName, teamMembers } = request.body;
    let newTeam = new teamDB({
        teamName: teamName.toLowerCase(),
        teamType: teamType.toLowerCase(),
        batchId: batchId,
        mentorId: mentorId,
        mentorName: mentorName,
        teamMembers: teamMembers,
    });
    teamDB.findOne({ teamName: teamName.toLowerCase() }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while registering Team, Try Again !", null, false));
        }
        else if (!result) {
            newTeam.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Team Registered Successfully", null, true));
                }
            });
        }
        else {
            response.json(message("Team name is already taken", null, false));
        }
    });
};
export default RegisterteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRldGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2NyZWF0ZXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSx1QkFBdUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM3RCxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3ZGLElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDO1FBQ3ZCLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFO1FBQ2hDLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFO1FBQ2hDLE9BQU8sRUFBQyxPQUFPO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsV0FBVyxFQUFFLFdBQVc7S0FDekIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLE9BQU8sQ0FDWixFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFDcEMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxvREFBb0QsRUFDcEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDthQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDcEU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxzQkFBc0IsQ0FBQyJ9