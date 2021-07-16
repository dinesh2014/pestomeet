import { S3, BUCKET } from "./app-constants";
S3.deleteObject(
  {
    Bucket: BUCKET,
    Key: "some/subfolders/nameofthefile1.extension",
  },
  function (err, data) {}
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczMtZGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvczMtZGVsZXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE9BQU8sRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFPM0MsRUFBRSxDQUFDLFlBQVksQ0FBQztJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsR0FBRyxFQUFFLDBDQUEwQztDQUNoRCxFQUFDLFVBQVUsR0FBRyxFQUFDLElBQUksSUFBRSxDQUFDLENBQUMsQ0FBQSJ9
