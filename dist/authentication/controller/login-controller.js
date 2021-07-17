import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userDB from "../../user/schema/user-schema";
import { message } from "../../utils/response-format";
const LoginController = (request, response) => {
    const { email, phone, password } = request.body;
    userDB.findOne({
        $and: [
            { $or: [{ email: email.toLowerCase() }, { phone: phone }] },
            { approval: process.env.APPROVED },
        ],
    }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while registering User, Try Again !", null, false));
        }
        else if (!result) {
            response.json(message("User is not registered / Activated ", null, false));
        }
        else if (bcrypt.compareSync(password, result.password)) {
            console.log("JWT Token Created");
            console.log(result);
            const key = process.env.JWT_SECRET;
            try {
                jwt.sign({ auth: true, name: result.name, id: result.id, role: result.role }, key, (error, token) => {
                    if (error) {
                        response.json(message("Login Error", error, false));
                    }
                    else {
                        response.json(message("Login Success", token, true));
                        console.log(token);
                    }
                });
            }
            catch (_a) {
                response.json(message("Authentication Error", null, false));
            }
        }
        else if (!bcrypt.compareSync(password, result.password)) {
            response.json(message("Wrong Username/Password", null, false));
        }
        else {
            response.json(message("Error Happened while registering User, Try Again !", null, false));
        }
    });
};
export default LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2NvbnRyb2xsZXIvbG9naW4tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxHQUFlLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sTUFBTSxNQUFNLCtCQUErQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQ1o7UUFDRSxJQUFJLEVBQUU7WUFDSixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDM0QsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7U0FDbkM7S0FDRixFQUNELENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsb0RBQW9ELEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FDNUQsQ0FBQztTQUNIO2FBQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFvQixDQUFDO1lBQzdDLElBQUk7Z0JBQ0YsR0FBRyxDQUFDLElBQUksQ0FDTixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDbkUsR0FBRyxFQUNILENBQUMsS0FBVSxFQUFFLEtBQVUsRUFBRSxFQUFFO29CQUN6QixJQUFJLEtBQUssRUFBRTt3QkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ3JEO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDcEI7Z0JBQ0gsQ0FBQyxDQUNGLENBQUM7YUFDSDtZQUFDLFdBQU07Z0JBQ04sUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDN0Q7U0FDRjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDekQsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLG9EQUFvRCxFQUNwRCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLGVBQWUsQ0FBQyJ9