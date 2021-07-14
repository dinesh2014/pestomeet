import uploadAvatar from '../schema/user-schema';
import { message } from '../../utils/response-format';
import profileImgUpload from '../../utils/s3-upload';
const AvatarController = (request, response) => {
    const id = request.params.id;
    profileImgUpload(request, response, (error) => {
        if (error) {
            response.json({ error: error });
        }
        else {
            // If File not found
            if (request.file === undefined) {
                response.json('Error: No File Selected');
            }
            else {
                const imageName = request.file;
                let editUser = { "avatar": imageName.location };
                console.log(id);
                uploadAvatar.findOneAndUpdate({ "id": id }, { $set: editUser }, { useFindAndModify: false, new: true }, (errors, doc) => {
                    if (errors) {
                        response.json(message("Upload Failed ! Please Try Again", null, false));
                    }
                    else if (!doc) {
                        response.json(message("Couldn't Find the user", null, false));
                    }
                    else {
                        response.json(message("Profile Picture Successfully", null, true));
                    }
                });
            }
        }
    });
};
export default AvatarController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2NvbnRyb2xsZXIvYXZhdGFyLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLE1BQU0sdUJBQXVCLENBQUE7QUFDaEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLDZCQUE2QixDQUFBO0FBQ25ELE9BQU8sZ0JBQWdCLE1BQU0sdUJBQXVCLENBQUE7QUFHcEQsTUFBTSxnQkFBZ0IsR0FBRSxDQUFDLE9BQVcsRUFBQyxRQUFZLEVBQUMsRUFBRTtJQUNoRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUU3QixnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUUsS0FBSyxFQUFHLEVBQUU7UUFDN0MsSUFBSSxLQUFLLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFFLENBQUM7U0FDbEM7YUFBTTtZQUNOLG9CQUFvQjtZQUNwQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUMvQixRQUFRLENBQUMsSUFBSSxDQUFFLHlCQUF5QixDQUFFLENBQUM7YUFDM0M7aUJBQUs7Z0JBQ0wsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTtnQkFDOUIsSUFBSSxRQUFRLEdBQUcsRUFBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQyxDQUFBO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUNmLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsRUFBQyxFQUFDLGdCQUFnQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUMsQ0FBQyxNQUFVLEVBQUMsR0FBTyxFQUFDLEVBQUU7b0JBQzlHLElBQUksTUFBTSxFQUFFO3dCQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtDQUFrQyxFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO3FCQUN4RTt5QkFBTSxJQUFHLENBQUMsR0FBRyxFQUFDO3dCQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO3FCQUM5RDt5QkFBSzt3QkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtxQkFDbkU7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7YUFFTDtTQUNGO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFFRixDQUFDLENBQUE7QUFFRCxlQUFlLGdCQUFnQixDQUFDIn0=