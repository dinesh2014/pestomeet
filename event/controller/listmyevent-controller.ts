import eventDB from "../schema/event-schema";
import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";

const ListMyEventController = (request: any, response: any) => {
  const userID = request.params.userID;
  userDB
    .findOne(
      {id:userID},
      (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving user", errors, false));
        } else if (result == null) {
          response.json(
            message("No User Found", null, false)
          );
        } else if(result.role == "super admin") {
            eventDB.find({},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Events", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Events Found", null, false))
                }else{
                    response.json(message("Events Reterived", result, true))
                }
            })
        }else if (result.role == "admin"){
            eventDB.find({organiserId:userID},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Events", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Events Found", null, false))
                }else{
                  response.json(message("Students Reterived", result, true))
                }
            });
        }else if (result.role == "mentor"){
            eventDB.find({organiserId:userID},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Events", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Events Found", null, false))
                }else{
                    response.json(message("Events Reterived",result, true))
                }
            });
        }else{
            eventDB.find({attendees:{$elemMatch:{batchMember:{$elemMatch:{id:userID}}}}},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Events", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Events Found", null, false))
                }else{
                   response.json(message("Events Reterived", result, false));
                }
            });
        }
      }
    )

};

export default ListMyEventController;
