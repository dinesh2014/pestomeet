import express from "express";
import { check } from "express-validator";
import editteamController from "../controller/editteam-controller";
const editteamRouter = express.Router();
console.log("in router");
editteamRouter.patch(
  "/:id",
  check("teamName", "teamName is required").not().isEmpty(),
  check("teamType").not().isEmpty(),
  check("mentorName").not().isEmpty(),
  check("teamMembers").not().isEmpty(),
  editteamController
);
export default editteamRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHRlYW0tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZWFtL3JvdXRlcy9lZGl0dGVhbS1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFRLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sa0JBQWtCLE1BQU0sbUNBQW1DLENBQUM7QUFFbkUsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFekIsY0FBYyxDQUFDLEtBQUssQ0FDbEIsTUFBTSxFQUNOLEtBQUssQ0FBQyxVQUFVLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDekQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUNqQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQ25DLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDcEMsa0JBQWtCLENBQ25CLENBQUM7QUFFRixlQUFlLGNBQWMsQ0FBQyJ9
