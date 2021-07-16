import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import registerUser from "../../user/schema/user-schema";
import { message } from "../../utils/response-format";
const LoginController = (request, response) => {
  const { email, phone, password } = request.body;
  registerUser.findOne(
    {
      $and: [
        { $or: [{ email: email.toLowerCase() }, { phone: phone }] },
        { approval: process.env.APPROVED },
      ],
    },
    (error, result) => {
      if (error) {
        response.json(
          message(
            "Error Happened while registering User, Try Again !",
            null,
            false
          )
        );
      } else if (!result) {
        response.json(
          message("User is not registered / Activated ", null, false)
        );
      } else if (bcrypt.compareSync(password, result.password)) {
        console.log("JWT Token Created");
        console.log(result);
        const key = process.env.JWT_SECRET;
        try {
          jwt.sign(
            { auth: true, name: result.name, id: result.id, role: result.role },
            key,
            (error, token) => {
              if (error) {
                response.json(message("Login Error", error, false));
              } else {
                response.json(message("Login Success", token, true));
                console.log(token);
              }
            }
          );
        } catch (_a) {
          response.json(message("Authentication Error", null, false));
        }
      } else if (!bcrypt.compareSync(password, result.password)) {
        response.json(message("Wrong Username/Password", null, false));
      } else {
        response.json(
          message(
            "Error Happened while registering User, Try Again !",
            null,
            false
          )
        );
      }
    }
  );
};
export default LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2NvbnRyb2xsZXIvbG9naW4tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxHQUFlLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sWUFBWSxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RCxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQVksRUFBRSxRQUFhLEVBQUUsRUFBRTtJQUN0RCxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2hELFlBQVksQ0FBQyxPQUFPLENBQ2xCO1FBQ0UsSUFBSSxFQUFFO1lBQ0osRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzNELEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO1NBQ25DO0tBQ0YsRUFDRCxDQUFDLEtBQVUsRUFBRSxNQUFXLEVBQUUsRUFBRTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULFFBQVEsQ0FBQyxJQUFJLENBQ1gsT0FBTyxDQUNMLG9EQUFvRCxFQUNwRCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQ0YsQ0FBQztTQUNIO2FBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQzVELENBQUM7U0FDSDthQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBb0IsQ0FBQztZQUM3QyxJQUFJO2dCQUNGLEdBQUcsQ0FBQyxJQUFJLENBQ04sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ25FLEdBQUcsRUFDSCxDQUFDLEtBQVUsRUFBRSxLQUFVLEVBQUUsRUFBRTtvQkFDekIsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUNyRDt5QkFBTTt3QkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3BCO2dCQUNILENBQUMsQ0FDRixDQUFDO2FBQ0g7WUFBQyxXQUFNO2dCQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7YUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxRQUFRLENBQUMsSUFBSSxDQUNYLE9BQU8sQ0FDTCxvREFBb0QsRUFDcEQsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxlQUFlLENBQUMifQ==
