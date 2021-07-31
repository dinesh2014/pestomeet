import resourceDB from "../schema/resource-schema";
import { message } from "../../utils/response-format";

const ListresourceController = (request: any, response: any) => {
  const eventId = request.params.eventId;
  resourceDB
    .find(
      {eventId: eventId}).populate("eventDetail").populate("uploaderDetail").exec((errors: any, result: any) => {
        if (errors) {
          response.json(message("Error while reteriving resource", errors, false));
        } else if (result.length == 0) {
          console.log(result)
          response.json(
            message("No resource available for the event", null, false)
          );
        } else {
          let resources = result.map((items)=>{
            return {
              resourceLinks: items.resourceLinks,
              resourceName: items.resourceName,
              uploaderId:items.uploaderId,
              uploaderName:items.uploaderDetail.name,
              eventId: items.eventId,
              eventName:items.eventDetail.eventName,
              resourceKey: items.resourceKey,
              resource: items.resource,
              resourceId: items.resourceId
            }
          })
          
          response.json(

            message(
              String(result.length) + " Resources available for the event ",
              resources,
              true
            )
          );
        }
      }
    )
};

export default ListresourceController;
