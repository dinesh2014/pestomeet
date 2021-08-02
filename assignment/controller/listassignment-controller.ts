import assignmentDB from "../schema/assignment-schema";
import { message } from "../../utils/response-format";

const ListassignmentController = (request: any, response: any) => {
  const eventID = request.params.eventID;
  assignmentDB
    .find(
      {eventID: eventID}).populate("uploaderDetail").exec((errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving assignment", errors, false));
        } else if (result.length == 0) {
          response.json(
            message("No assignment available for the event", null, false)
          );
        } else {
          let resources = result.map((items)=>{
            console.log(items.uploaderDetail)
            return {
              assignmentId:items.assignmentId,
              assignmentName:items.assignmentId ,
              uploaderId:items.assignmentId ,
              uploaderName:items.uploaderDetail.name,
              eventID:items.assignmentId ,
              assignmentLinks:items.assignmentId,
            }
          })

          response.json(
            message(
              String(result.length) + " Assignment available for the event ",
              resources,
              true
            )
          );
        }
      }
    )
};

export default ListassignmentController;
