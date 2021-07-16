import registerUser from "../../user/schema/user-schema";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { validationResult } from "express-validator";
import { message } from "../../utils/response-format";
const id = uuidv4();
const RegisterController = (reqest, response) => {
    const { name, email, phone, password, role, experience, approval } = reqest.body;
    const errors = validationResult(reqest);
    if (!errors.isEmpty()) {
        return response.json(message("Validation Error", errors.array(), false));
    }
    const hash = bcrypt.hashSync(password, 10);
    const newUser = new registerUser({
        id: id,
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        phone: phone,
        password: hash,
        role: role.toLowerCase(),
        experience: experience,
        approval: approval.toLowerCase(),
    });
    registerUser.findOne({ $or: [{ email: email.toLowerCase() }, { phone: phone }] }, (error, result) => {
        if (error) {
            response.json(message("Error Happened while registering User, Try Again !", null, false));
        }
        else if (!result) {
            newUser.save((error, result) => {
                if (error) {
                    response.json({ message: error });
                }
                else {
                    response.json(message("User Registered Successfully", null, true));
                }
            });
        }
        else {
            console.log(result);
            response.json(message("User Already Available", null, false));
        }
    });
};
export default RegisterController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2NvbnRyb2xsZXIvcmVnaXN0ZXItY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSwrQkFBK0IsQ0FBQztBQUN6RCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRELE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxNQUFXLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxHQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNyQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFFO0lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDL0IsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUN4QixLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUMxQixLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDeEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUU7S0FDakMsQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLE9BQU8sQ0FDbEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQzNELENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1FBQzFCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLElBQUksQ0FDWCxPQUFPLENBQ0wsb0RBQW9ELEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFVLEVBQUUsTUFBVyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksS0FBSyxFQUFFO29CQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxrQkFBa0IsQ0FBQyJ9