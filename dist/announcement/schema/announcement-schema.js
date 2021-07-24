import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { DB_ANNOUNCEMENT_MODEL } from "../../utils/app-constants";
export const announcementSchema = new mongoose.Schema({
    announcementId: { type: String, required: true, default: () => uuidv4() },
    announcementName: { type: String, required: true },
    announcementDescription: { type: String },
    announcementTime: { type: Date, default: Date.now },
});
const eventModel = mongoose.model(DB_ANNOUNCEMENT_MODEL, announcementSchema);
export default eventModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3VuY2VtZW50LXNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fubm91bmNlbWVudC9zY2hlbWEvYW5ub3VuY2VtZW50LXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFTbEUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFnQjtJQUNqRSxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFDO0lBQ3ZFLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2xELHVCQUF1QixFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUN2QyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7Q0FDdEQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzdFLGVBQWUsVUFBVSxDQUFDIn0=