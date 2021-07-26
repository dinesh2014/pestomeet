import userDB from "../../user/schema/user-schema";
import batchDB from "../../batch/schema/batch-schema";
import teamDB from "../../team/schema/team-schema";
import { message } from "../../utils/response-format";

/* This module serves as the controller for the API "api/pesto/list/mybatch/" which get userID
as a params and list batches based on userrole */

const ListMyTeamController = (request: any, response: any) => {
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
            teamDB.find({},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Batch", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Batch Found", null, false))
                }else{
                    response.json(message("Batch Reterived", result, true))
                }
            })
        }else if (result.role == "admin"){
            batchDB.find({batchOwnerID:userID},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Batch", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Batch Found", null, false))
                }else{
                    let batch = result.map((member:any,index:any)=>{
                        return member.batchId; 
                    })  

                    teamDB.find({batchId: { $in :batch}},(errors: any, result: any) => {
                        if (errors) {
                          response.json(message("Error while reteriving Batch", errors, false));
                        } else if (result.length == 0) {
                          response.json(message("No Batch Found", null, false))
                        }else{
                          response.json(message("Teams Found", result, false))
                        }
                    })
                }
            })
        }else if (result.role == "mentor"){
            teamDB.find({mentorId:userID},(errors: any, result: any) => {
                if (errors) {
                  response.json(message("Error while reteriving Batch", errors, false));
                } else if (result.length == 0) {
                  response.json(message("No Batch Found", null, false))
                }else{
                    response.json(message("Batches Reterived", result, true))
                }
            });
        }else{
            response.json(message("Not Applicable for Students", null, false))
        }
      }
    )

};

export default ListMyTeamController;
