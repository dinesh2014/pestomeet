import editTeam from '../schema/team-schema';
import { validationResult } from 'express-validator';
import { message } from '../../utils/response-format';
const ApprovalController = (request, response) => {
    let { teamName, teamType, mentorId, mentorName, teamMembers } = request.body;
    let id = request.params.id;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    let editTeams = { "teamName": teamName.toLowerCase(), "teamType": teamType, "mentorId": mentorId, "mentorName": mentorName, "teamMembers": teamMembers };
    const doc = editTeam.findOneAndUpdate({ "id": id }, { $set: editTeams }, { useFindAndModify: false, new: true }, (errors, doc) => {
        if (errors) {
            response.json(message("Update Failed ! Please Try Again", null, false));
        }
        else if (!doc) {
            response.json(message("Couldn't Find the Team", null, true));
        }
        else {
            response.json(message("Team Updated Successfully", null, true));
        }
    });
};
export default ApprovalController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHRlYW0tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RlYW0vY29udHJvbGxlci9lZGl0dGVhbS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFBO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTtBQUduRCxNQUFNLGtCQUFrQixHQUFFLENBQUMsT0FBVyxFQUFDLFFBQVksRUFBQyxFQUFFO0lBQ2xELElBQUksRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLEdBQUUsT0FBTyxDQUFDLElBQUksQ0FBQztJQUN0RSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUMzQixNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3JCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDekU7SUFFRCxJQUFJLFNBQVMsR0FBRyxFQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxDQUFBO0lBQzdJLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsRUFBQyxFQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxNQUFVLEVBQUMsR0FBTyxFQUFDLEVBQUU7UUFDdkgsSUFBSSxNQUFNLEVBQUU7WUFDUixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN4RTthQUFPLElBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUM3RDthQUFJO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDaEU7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQTtBQUVELGVBQWUsa0JBQWtCLENBQUMifQ==