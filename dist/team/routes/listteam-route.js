import express from "express";
import listteamController from "../controller/listteam-controller";
const listteamRouter = express.Router();
listteamRouter.get("/:type", listteamController);
export default listteamRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHRlYW0tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZWFtL3JvdXRlcy9saXN0dGVhbS1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxrQkFBa0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUNuRSxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDeEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxlQUFlLGNBQWMsQ0FBQyJ9