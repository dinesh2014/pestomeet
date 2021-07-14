import listUser from '../schema/user-schema';
import { message } from '../../utils/response-format';
const ListuserController = (request, response) => {
    const status = request.params.status;
    const role = request.params.role;
    listUser.find({ "approval": status.toLowerCase(), "role": role.toLowerCase() }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving user", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No user is in " + String(status) + " Status", null, false));
        }
        else {
            response.json(message(String(result.length) + " users on " + String(status) + " Status", result, true));
        }
    }).select("-password").select("-_id");
};
export default ListuserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHVzZXItY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIvY29udHJvbGxlci9saXN0dXNlci1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFBO0FBQzVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTtBQUduRCxNQUFNLGtCQUFrQixHQUFFLENBQUMsT0FBVyxFQUFDLFFBQVksRUFBQyxFQUFFO0lBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsRUFBQyxDQUFDLE1BQVUsRUFBQyxNQUFVLEVBQUMsRUFBRTtRQUMvRixJQUFJLE1BQU0sRUFBRTtZQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3JFO2FBQUssSUFBRyxNQUFNLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBQztZQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQy9FO2FBQUk7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFFLFlBQVksR0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1NBQy9GO0lBQ1QsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUV6QyxDQUFDLENBQUE7QUFFRCxlQUFlLGtCQUFrQixDQUFDIn0=