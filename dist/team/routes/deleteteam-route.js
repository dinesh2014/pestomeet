import express from 'express';
import deleteteamController from '../controller/deleteteam-controller';
const deleteteamRouter = express.Router();
deleteteamRouter.delete('/:id', deleteteamController);
export default deleteteamRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRldGVhbS1yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RlYW0vcm91dGVzL2RlbGV0ZXRlYW0tcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFBO0FBQzdCLE9BQU8sb0JBQW9CLE1BQU0scUNBQXFDLENBQUE7QUFFdEUsTUFBTSxnQkFBZ0IsR0FBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDeEMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRXBELGVBQWUsZ0JBQWdCLENBQUMifQ==