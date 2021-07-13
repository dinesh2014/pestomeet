import editTeam from '../schema/team-schema'
import { validationResult } from 'express-validator';
import {message} from '../../utils/response-format'


const ApprovalController =(request:any,response:any)=>{
    let {teamName,teamType,mentorId,mentorName,teamMembers}= request.body; 
    let teamId = request.params.id;
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.json(message("Validation Error", errors.array(),false));
    }

    let editTeams = {"teamName":teamName.toLowerCase(),"teamType":teamType,"mentorId":mentorId,"mentorName":mentorName,"teamMembers":teamMembers}
    editTeam.findOne({'teamName':teamName.toLowerCase()},(error:any,result:any)=>{
        if(error){
            response.json(message("Update Failed ! Please Try Again",null,false))
         }else if(result){
            response.json(message("Team Name Already Taken",null,false))
         }else{
             editTeam.findOneAndUpdate({"teamId":teamId},{$set:editTeams},{useFindAndModify: false ,new:true},(errors:any,doc:any)=>{
             if (errors) {
                 response.json(message("Update Failed ! Please Try Again",null,false))
             }else if(!doc){
                 response.json(message("Couldn't Find the Team",null,true))
                }else{
                    response.json(message("Team Updated Successfully",null,true))
                }
             })}
    })
    
}

export default ApprovalController;