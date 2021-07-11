import deleteBatch from '../schema/batch-schema';
import { message } from '../../utils/response-format';
const DeleteteamController = (request, response) => {
    const id = request.params.id;
    deleteBatch.findOneAndDelete({ "teamId": id }, {}, (errors, docs) => {
        if (errors) {
            response.json(message("Error while deleting batch", null, false));
        }
        else if (!docs) {
            response.json(message("batch Not Found", docs, true));
        }
        else {
            response.json(message("batch deleted successfully", docs, false));
        }
    });
};
export default DeleteteamController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlYmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvZGVsZXRlYmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQTtBQUNoRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sNkJBQTZCLENBQUE7QUFHbkQsTUFBTSxvQkFBb0IsR0FBRSxDQUFDLE9BQVcsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUNwRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUM3QixXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsTUFBVSxFQUFDLElBQVEsRUFBQyxFQUFFO1FBQ2pFLElBQUksTUFBTSxFQUFFO1lBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDbEU7YUFBSyxJQUFHLENBQUMsSUFBSSxFQUFDO1lBQ1gsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDdEQ7YUFBSTtZQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ2xFO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFVixDQUFDLENBQUE7QUFFRCxlQUFlLG9CQUFvQixDQUFDIn0=