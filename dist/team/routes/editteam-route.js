import express from 'express';
import { check } from 'express-validator';
import editteamController from '../controller/editteam-controller';
const editteamRouter = express.Router();
console.log("in router");
editteamRouter.patch('/:id', check('teamName', 'teamName is required').not().isEmpty(), check('teamType').not().isEmpty(), check('mentorName').not().isEmpty(), check('teamMembers').not().isEmpty(), editteamController);
export default editteamRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHRlYW0tcm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZWFtL3JvdXRlcy9lZGl0dGVhbS1yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUE7QUFDN0IsT0FBTyxFQUFPLEtBQUssRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sa0JBQWtCLE1BQU0sbUNBQW1DLENBQUE7QUFFbEUsTUFBTSxjQUFjLEdBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFeEIsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUNyRixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQ2pDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDbkMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUNwQyxrQkFBa0IsQ0FBQyxDQUFBO0FBRW5CLGVBQWUsY0FBYyxDQUFDIn0=