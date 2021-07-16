import registerBatch from "../schema/batch-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";
const batchId = uuidv4();
const CreatebatchController = (reqest, response) => {
  const { batchName, batchType, batchOwner, batchMembers } = reqest.body;
  const newBatch = new registerBatch({
    batchId: batchId,
    batchName: batchName.toLowerCase(),
    batchType: batchType,
    batchOwner: batchOwner,
    batchMembers: batchMembers,
  });
  registerBatch.findOne(
    { batchName: batchName.toLowerCase() },
    (error, result) => {
      if (error) {
        response.json(
          message(
            "Error Happened while creating batch, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newBatch.save((error, result) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Batch Created Successfully", null, true));
          }
        });
      } else {
        response.json(message("Batch name is already taken", null, false));
      }
    }
  );
};
export default CreatebatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlYmF0Y2gtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhdGNoL2NvbnRyb2xsZXIvY3JlYXRlYmF0Y2gtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGFBQWEsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFdEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFDekIsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN2RSxNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQWEsQ0FBQztRQUNqQyxPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtRQUNsQyxTQUFTLEVBQUUsU0FBUztRQUNwQixVQUFVLEVBQUUsVUFBVTtRQUN0QixZQUFZLEVBQUUsWUFBWTtLQUMzQixDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsT0FBTyxDQUNuQixFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFDdEMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxrREFBa0QsRUFDbEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDthQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbEU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxxQkFBcUIsQ0FBQyJ9
