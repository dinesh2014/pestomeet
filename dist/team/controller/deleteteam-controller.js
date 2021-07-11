import deleteTeam from '../schema/team-schema';
import { message } from '../../utils/response-format';
const DeleteteamController = (request, response) => {
    const id = request.params.id;
    deleteTeam.findOneAndDelete({ "teamId": id }, {}, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting User", null, false));
        }
        else if (!docs) {
            response.json(message("Team Not Found", docs, false));
        }
        else {
            response.json(message("Team deleted successfully", docs, true));
        }
    });
};
export default DeleteteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRldGVhbS1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVhbS9jb250cm9sbGVyL2RlbGV0ZXRlYW0tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFHckQsTUFBTSxvQkFBb0IsR0FBRSxDQUFDLE9BQVcsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUNwRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM3QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsTUFBVSxFQUFDLElBQVEsRUFBQyxFQUFFO1FBQ2hFLElBQUksTUFBTSxFQUFFO1lBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDakU7YUFBSyxJQUFHLENBQUMsSUFBSSxFQUFDO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDdEQ7YUFBSTtZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1NBQ2hFO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFVixDQUFDLENBQUE7QUFFRCxlQUFlLG9CQUFvQixDQUFDIn0=