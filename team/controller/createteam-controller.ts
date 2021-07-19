import teamDB from "../schema/team-schema";
import { v4 as uuidv4 } from "uuid";
import { message } from "../../utils/response-format";

const RegisterteamController = (request: any, response: any) => {
  const { teamName, teamType, mentorId, mentorName, teamMembers } = request.body;
  let newTeam = new teamDB({
    teamName: teamName.toLowerCase(),
    teamType: teamType.toLowerCase(),
    mentorId: mentorId,
    mentorName: mentorName,
    teamMembers: teamMembers,
  });

  teamDB.findOne(
    { teamName: teamName.toLowerCase() },
    (error: any, result: any) => {
      if (error) {
        response.json(
          message(
            "Error Happened while registering Team, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        newTeam.save((error: any, result: any) => {
          if (error) {
            response.json({ message: error });
          } else {
            response.json(message("Team Registered Successfully", null, false));
          }
        });
      } else {
        response.json(message("Team name is already taken", null, false));
      }
    }
  );
};

export default RegisterteamController;
