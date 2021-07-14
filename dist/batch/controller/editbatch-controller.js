import editBatch from '../schema/batch-schema';
import { validationResult } from 'express-validator';
import { message } from '../../utils/response-format';
const ApprovalController = (request, response) => {
    const { batchName, batchType, batchOwner, batchMembers } = request.body;
    const batchId = request.params.id;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    let editBatches = { "batchName": batchName.toLowerCase(), "batchType": batchType, "batchOwner": batchOwner, "batchMembers": batchMembers };
    const doc = editBatch.findOneAndUpdate({ "batchId": batchId }, { $set: editBatches }, { useFindAndModify: false, new: true }, (errors, doc) => {
        if (errors) {
            response.json(message("Update Failed ! Please Try Again", null, false));
        }
        else if (doc == null) {
            response.json(message("Couldn't Find the Batch", null, true));
        }
        else {
            response.json(message("Batch updated successfully", null, false));
        }
    });
};
export default ApprovalController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGJhdGNoLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYXRjaC9jb250cm9sbGVyL2VkaXRiYXRjaC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLHdCQUF3QixDQUFBO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTtBQUduRCxNQUFNLGtCQUFrQixHQUFFLENBQUMsT0FBVyxFQUFDLFFBQVksRUFBQyxFQUFFO0lBQ2xELE1BQU0sRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2xFLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDckIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN6RTtJQUVELElBQUksV0FBVyxHQUFHLEVBQUMsV0FBVyxFQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxDQUFBO0lBQ2pJLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsRUFBQyxFQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxNQUFVLEVBQUMsR0FBTyxFQUFDLEVBQUU7UUFDcEksSUFBSSxNQUFNLEVBQUU7WUFDUixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN4RTthQUFNLElBQUcsR0FBRyxJQUFHLElBQUksRUFBQztZQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUM5RDthQUFJO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDbEU7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQTtBQUVELGVBQWUsa0JBQWtCLENBQUMifQ==