import teamDB from "../schema/team-schema";
import { message } from "../../utils/response-format";

const ListteamController = (request: any, response: any) => {
  const teamType = request.params.type;
  teamDB.find(
    { teamType: teamType.toLowerCase() }).populate("batchDetail").populate("mentorDetail").exec((errors: any, result: any) => {
      if (errors) {
        response.json(message("Error while reteriving team", errors, false));
      } else if (result.length == 0) {
        response.json(
          message("No " + String(teamType) + " Team found", null, false)
        );
      } else {
        let adminTeam = result.map((items)=>{
          let batchName,batchOwner 
          if(items.batchDetail.batchName){
            batchName = items.batchDetail.batchName
          }else{
            batchName = "Invalid Batch"
          }

          if(items.batchDetail.batchOwner){
            batchOwner = items.batchDetail.batchOwner
          }else{
            batchOwner = "Invalid Batch"
          }
          return {
            teamId: items.teamId ,
            teamName:items.teamName ,
            teamType:items.teamType ,
            batchId: items.batchId ,
            batchName:batchName,
            batchOwner:batchOwner,
            batchOwnerID:items.batchOwnerID,
            mentorId:items.mentorId,
            mentorName:items.mentorDetail.name,
            teamMembers:items.teamMembers}
        })

        response.json(
          message(
            String(result.length) + " " + String(teamType) + " Teams Found",
            adminTeam,
            true
          )
        );
      }
    }
  );
};

export default ListteamController;
