import registerTeam from '../schema/team-schema';
import { v4 as uuidv4 } from 'uuid';
import { message } from '../../utils/response-format';
var teamId = uuidv4();
const RegisterteamController = (reqest, response) => {
    const { teamName, teamType, mentorId, mentorName, teamMembers } = reqest.body;
    let newTeam = new registerTeam({ "teamId": teamId, "teamName": teamName.toLowerCase(), "teamType": teamType.toLowerCase(), "mentorId": mentorId, "mentorName": mentorName, "teamMembers": teamMembers });
    registerTeam.findOne({ 'teamName': teamName.toLowerCase() }, (error, result) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRldGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2NyZWF0ZXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSx1QkFBdUIsQ0FBQTtBQUNoRCxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sNkJBQTZCLENBQUE7QUFHbkQsSUFBSSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDdEIsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLE1BQVUsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUUxRCxNQUFNLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxDQUFDLENBQUE7SUFFM0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFBQyxDQUFDLEtBQVMsRUFBQyxNQUFVLEVBQUMsRUFBRTtRQUM3RSxJQUFHLEtBQUssRUFBQztZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9EQUFvRCxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQzFGO2FBQUssSUFBRyxDQUFDLE1BQU0sRUFBQztZQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFTLEVBQUMsTUFBVSxFQUFDLEVBQUU7Z0JBQ3pCLElBQUksS0FBSyxFQUFDO29CQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztpQkFBRTtxQkFDeEM7b0JBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7aUJBQUM7WUFBQSxDQUFDLENBQUMsQ0FBQTtTQUN0RjthQUFJO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDaEU7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQTtBQUVELGVBQWUsc0JBQXNCLENBQUEifQ==