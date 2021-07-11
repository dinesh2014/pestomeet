import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import registerUser from '../../user/schema/user-schema';
import { message } from '../../utils/response-format';
const LoginController = (request, response) => {
    const { email, phone, password } = request.body;
    registerUser.findOne({ $and: [
            { $or: [{ 'email': email.toLowerCase() }, { 'phone': phone }] },
            { 'approval': process.env.APPROVED }
        ] }, (error, result) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1dGhlbnRpY2F0aW9uL2NvbnRyb2xsZXIvbG9naW4tY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUE7QUFDM0IsT0FBTyxHQUFlLE1BQU0sY0FBYyxDQUFBO0FBQzFDLE9BQU8sWUFBWSxNQUFNLCtCQUErQixDQUFBO0FBQ3hELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQUdyRCxNQUFNLGVBQWUsR0FBRSxDQUFDLE9BQVcsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUNuRCxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzVDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUM7WUFDRyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUM7WUFDckQsRUFBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUM7U0FDcEMsRUFBQyxFQUNFLENBQUMsS0FBUyxFQUFDLE1BQVUsRUFBQyxFQUFFO1FBQ2xELElBQUcsS0FBSyxFQUFDO1lBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0RBQW9ELEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDeEY7YUFBSyxJQUFHLENBQUMsTUFBTSxFQUFDO1lBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUNBQXFDLEVBQUMsSUFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDM0U7YUFBSyxJQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBQztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixNQUFNLEdBQUcsR0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQW9CLENBQUE7WUFDM0MsSUFBRztnQkFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksRUFBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLEtBQVMsRUFBRSxLQUFTLEVBQUMsRUFBRTtvQkFDL0YsSUFBRyxLQUFLLEVBQUM7d0JBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO3FCQUNsRDt5QkFBSTt3QkFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7cUJBQ25CO2dCQUFBLENBQUMsQ0FBQyxDQUFBO2FBQ047WUFBQSxXQUFLO2dCQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2FBQzFEO1NBQ0w7YUFBSyxJQUFHLENBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ2hFO2FBQUk7WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvREFBb0QsRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN4RjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBO0FBRUQsZUFBZSxlQUFlLENBQUMifQ==