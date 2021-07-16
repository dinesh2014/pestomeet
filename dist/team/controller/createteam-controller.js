import registerTeam from "../schema/team-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";
var teamId = uuidv4();
const RegisterteamController = (reqest, response) => {
    const { teamName, teamType, mentorId, mentorName, teamMembers } = reqest.body;
    let newTeam = new registerTeam({
        teamId: teamId,
        teamName: teamName.toLowerCase(),
        teamType: teamType.toLowerCase(),
        mentorId: mentorId,
        mentorName: mentorName,
        teamMembers: teamMembers,
    });
    registerTeam.findOne({ teamName: teamName.toLowerCase() }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while registering Team, Try Again !", null, false));
        }
        else if (!result) {
            newTeam.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("Team Registered Successfully", null, false));
                }
            });
        }
        else {
            response.json(message("Team name is already taken", null, false));
        }
    });
};
export default RegisterteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRldGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2NyZWF0ZXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDdEIsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUM1RCxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDN0IsTUFBTSxFQUFFLE1BQU07UUFDZCxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNoQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUNoQyxRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsVUFBVTtRQUN0QixXQUFXLEVBQUUsV0FBVztLQUN6QixDQUFDLENBQUM7SUFFSCxZQUFZLENBQUMsT0FBTyxDQUNsQixFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFDcEMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxvREFBb0QsRUFDcEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDthQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDdkMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDckU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxzQkFBc0IsQ0FBQyJ9