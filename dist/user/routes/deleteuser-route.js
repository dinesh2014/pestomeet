import express from 'express';
import deleteController from '../controller/deleteuser-controller';
const deleteRouter = express.Router();
deleteRouter.delete('/:id', deleteController);
export default deleteRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRldXNlci1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VzZXIvcm91dGVzL2RlbGV0ZXVzZXItcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFBO0FBQzdCLE9BQU8sZ0JBQWdCLE1BQU0scUNBQXFDLENBQUE7QUFFbEUsTUFBTSxZQUFZLEdBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ3BDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLGdCQUFnQixDQUFDLENBQUE7QUFFNUMsZUFBZSxZQUFZLENBQUMifQ==