import listUser from "../schema/user-schema";
import { message } from "../../utils/response-format";

const ListalluserController = (request: any, response: any) => {
  listUser
    .find({},
      (errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving user", errors, false));
        } else if (result.length == 0) {
          response.json(
            message("No user is registered", null, false)
          );
        } else {
          response.json(
            message(
              String(result.length) + " users reterived " ,
              result,
              true
            )
          );
        }
      }
    )
    .select("-password")
    .select("-_id");
};

export default ListalluserController;
