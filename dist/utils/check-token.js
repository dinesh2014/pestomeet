require('dotenv').config();
import jwt from 'jsonwebtoken';
import { message } from "./response-format";
function CheckToken(req, res, next) {
    try {
        const token = req.headers["Authorization"];
        if (token) {
            console.log(token);
            const authToken = token.split(' ')[1];
            const key = process.env.JWT_SECRET;
            let payload = jwt.verify(authToken, key, (error, user) => {
                if (error) {
                    return res.json(message("Authentication Failed", error, false));
                }
                req.user = user;
                next();
            });
        }
        else {
            return res.json(message("Please Login", null, false));
        }
    }
    catch (_a) {
        return res.json(message("Authentication Error", null, false));
    }
}
export default CheckToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stdG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9jaGVjay10b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDMUIsT0FBTyxHQUFlLE1BQU0sY0FBYyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxTQUFTLFVBQVUsQ0FBQyxHQUFPLEVBQUMsR0FBTyxFQUFDLElBQVE7SUFDMUMsSUFBRztRQUNILE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0MsSUFBRyxLQUFLLEVBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFvQixDQUFDO1lBQzdDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLEdBQUcsRUFBQyxDQUFDLEtBQVMsRUFBQyxJQUFRLEVBQUMsRUFBRTtnQkFDekQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRyxLQUFLLEVBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDckU7Z0JBQ0QsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFJO1lBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUcsSUFBSSxFQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0Q7S0FDQTtJQUFBLFdBQUs7UUFDRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFHLElBQUksRUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ25FO0FBQ0QsQ0FBQztBQUdELGVBQWUsVUFBVSxDQUFDIn0=