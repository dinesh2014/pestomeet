import listBatch from '../schema/batch-schema';
import { message } from '../../utils/response-format';
const ListbatchController = (request, response) => {
    const batchType = request.params.type;
    listBatch.find({ "batchType": batchType }, (errors, result) => {
        if (!errors) {
            if (result.length == 0) {
                response.json(message("No " + String(batchType) + " Batch found", null, false));
            }
            else {
                response.json(message(String(result.length) + " " + String(batchType) + " Batches Found", result, true));
            }
        }
        else {
            response.json(message("Error while reteriving team", errors, false));
        }
    });
};
export default ListbatchController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJhdGNoLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYXRjaC9jb250cm9sbGVyL2xpc3RiYXRjaC1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLHdCQUF3QixDQUFBO0FBQzlDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQTtBQUduRCxNQUFNLG1CQUFtQixHQUFFLENBQUMsT0FBVyxFQUFDLFFBQVksRUFBQyxFQUFFO0lBQ25ELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLEVBQUMsQ0FBQyxNQUFVLEVBQUMsTUFBVSxFQUFDLEVBQUU7UUFDNUQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUcsTUFBTSxDQUFDLE1BQU0sSUFBRSxDQUFDLEVBQUM7Z0JBQ2hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2FBQzVFO2lCQUFJO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBQyxnQkFBZ0IsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUNuRztTQUNKO2FBQUk7WUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUNyRTtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBO0FBRUQsZUFBZSxtQkFBbUIsQ0FBQyJ9