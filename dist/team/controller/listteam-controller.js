import listTeam from '../schema/team-schema';
import { message } from '../../utils/response-format';
const ListteamController = (request, response) => {
    const teamType = request.params.type;
    listTeam.find({ "teamType": teamType }, (errors, result) => {
        if (errors) {
            response.json(message("Error while reteriving team", errors, false));
        }
        else if (result.length == 0) {
            response.json(message("No " + String(teamType) + " Team found", null, false));
        }
        else {
            response.json(message(String(result.length) + " " + String(teamType) + " Teams Found", result, true));
        }
    });
};
export default ListteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHRlYW0tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RlYW0vY29udHJvbGxlci9saXN0dGVhbS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFBO0FBQzVDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTtBQUduRCxNQUFNLGtCQUFrQixHQUFFLENBQUMsT0FBVyxFQUFDLFFBQVksRUFBQyxFQUFFO0lBQ2xELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLEVBQUMsQ0FBQyxNQUFVLEVBQUMsTUFBVSxFQUFDLEVBQUU7UUFDekQsSUFBSSxNQUFNLEVBQUU7WUFDUixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUNyRTthQUFLLElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUM7WUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBQyxhQUFhLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDMUU7YUFBSTtZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBQyxjQUFjLEVBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDNUY7SUFDVCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVELGVBQWUsa0JBQWtCLENBQUMifQ==