import express from "express";
import deleteassignmentController from "../controller/deleteassignment-controller";
const deleteassignmentRouter = express.Router();
deleteassignmentRouter.delete("/:id", deleteassignmentController);
export default deleteassignmentRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlYXNzaWdubWVudC1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2lnbm1lbnQvcm91dGVzL2RlbGV0ZWFzc2lnbm1lbnQtcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFtQixNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLDBCQUEwQixNQUFNLDJDQUEyQyxDQUFDO0FBRW5GLE1BQU0sc0JBQXNCLEdBQVcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hELHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUVsRSxlQUFlLHNCQUFzQixDQUFDIn0=