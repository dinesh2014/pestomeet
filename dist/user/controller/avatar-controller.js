import profileImgUpload from '../../utils/s3-upload';
const AvatarController = (request, response) => {
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
                // If Success
                const imageName = request.file;
                // Save the file name into database into profile model
                response.json({
                    imageURL: imageName.location
                });
            }
        }
    });
};
export default AvatarController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL2NvbnRyb2xsZXIvYXZhdGFyLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxnQkFBZ0IsTUFBTSx1QkFBdUIsQ0FBQTtBQUdwRCxNQUFNLGdCQUFnQixHQUFFLENBQUMsT0FBVyxFQUFDLFFBQVksRUFBQyxFQUFFO0lBRWhELGdCQUFnQixDQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBRSxLQUFLLEVBQUcsRUFBRTtRQUM3QyxJQUFJLEtBQUssRUFBRTtZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUUsQ0FBQztTQUNsQzthQUFNO1lBQ04sb0JBQW9CO1lBQ3BCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQUUseUJBQXlCLENBQUUsQ0FBQzthQUMzQztpQkFBTTtnQkFDTixhQUFhO2dCQUNiLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7Z0JBQ2xDLHNEQUFzRDtnQkFDdEQsUUFBUSxDQUFDLElBQUksQ0FBRTtvQkFDVixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7aUJBQzVCLENBQUUsQ0FBQzthQUNKO1NBQ0Q7SUFDRixDQUFDLENBQUMsQ0FBQztBQUVWLENBQUMsQ0FBQTtBQUVELGVBQWUsZ0JBQWdCLENBQUMifQ==