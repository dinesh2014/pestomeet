import express from "express";
import deleteresourceController from "../controller/deleteresource-controller";
const deleteresourceRouter = express.Router();
deleteresourceRouter.delete("/", deleteresourceController);
export default deleteresourceRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlcmVzb3VyY2Utcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yZXNvdXJjZXMvcm91dGVzL2RlbGV0ZXJlc291cmNlLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBbUIsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyx3QkFBd0IsTUFBTSx5Q0FBeUMsQ0FBQztBQUUvRSxNQUFNLG9CQUFvQixHQUFXLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0RCxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDLENBQUM7QUFFM0QsZUFBZSxvQkFBb0IsQ0FBQyJ9