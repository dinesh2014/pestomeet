import DeleteUser from '../schema/user-schema';
import { message } from '../../utils/response-format';
const DeleteuserController = (request, response) => {
    const id = request.params.id;
    DeleteUser.findOneAndDelete({ "id": id }, {}, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting User", null, false));
        }
        else if (!docs) {
            response.json(message("User Not Found", docs, false));
        }
        else {
            response.json(message("User deleted successfully", docs, true));
        }
    });
};
export default DeleteuserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRldXNlci1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlci9jb250cm9sbGVyL2RlbGV0ZXVzZXItY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQTtBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFHckQsTUFBTSxvQkFBb0IsR0FBRSxDQUFDLE9BQVcsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUNwRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM3QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsTUFBVSxFQUFDLElBQVEsRUFBQyxFQUFFO1FBQzVELElBQUksTUFBTSxFQUFFO1lBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDakU7YUFBSyxJQUFHLENBQUMsSUFBSSxFQUFDO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDdEQ7YUFBSTtZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1NBQ2hFO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFVixDQUFDLENBQUE7QUFFRCxlQUFlLG9CQUFvQixDQUFDIn0=