import batchDB from "../schema/batch-schema";
import { message } from "../../utils/response-format";

const DeleteteamController = (request: any, response: any) => {
  const id = request.params.id;
  batchDB.findOneAndDelete({ batchId: id }, {}, (errors: any, docs: any) => {
    if (errors) {
      response.json(message("Error while deleting batch", null, false));
    } else if (!docs) {
      response.json(message("batch Not Found", docs, true));
    } else {
      response.json(message("batch deleted successfully", docs, false));
    }
  });
};

export default DeleteteamController;
