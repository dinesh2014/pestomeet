import path from "path";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3, BUCKET, MASTERCLASS_FOLDER } from "./app-constants";
const masterClassUpload = multer({
    storage: multerS3({
        s3: S3,
        acl: 'public-read',
        bucket: BUCKET,
        key: function (req, file, cb) {
            cb(null, MASTERCLASS_FOLDER +
                "/" +
                req.body.resourceName +
                "_" +
                req.body.uploaderId +
                "_" +
                req.body.eventID +
                path.extname(file.originalname));
        },
    }),
    limits: { fileSize: 2000000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("resource");
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /mp4|avi/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    }
    else {
        cb(null, false);
    }
}
export default masterClassUpload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtbWFzdGVyY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9zMy1tYXN0ZXJjbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFFeEIsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUNqQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTWpFLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDO0lBQy9CLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDaEIsRUFBRSxFQUFFLEVBQUU7UUFDTixHQUFHLEVBQUUsYUFBYTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxVQUFVLEdBQVEsRUFBRSxJQUFJLEVBQUUsRUFBb0I7WUFDakQsRUFBRSxDQUNBLElBQUksRUFDSixrQkFBa0I7Z0JBQ2hCLEdBQUc7Z0JBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUNyQixHQUFHO2dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFDbkIsR0FBRztnQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQyxDQUFDO1FBQ0osQ0FBQztLQUNGLENBQUM7SUFDRixNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFO0lBQ2hDLFVBQVUsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBNkI7UUFDNUQsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUV0QixTQUFTLGFBQWEsQ0FBQyxJQUFTLEVBQUUsRUFBNkI7SUFDN0QsY0FBYztJQUNkLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixZQUFZO0lBQ1osTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLGFBQWE7SUFDYixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7UUFDdkIsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZCO1NBQU07UUFDTCxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELGVBQWUsaUJBQWlCLENBQUMifQ==