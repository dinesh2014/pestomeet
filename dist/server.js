/* This is the entry point of the back-end where Database Connection, Server Establishment,
 API Route Path  and Authentication middleware are configured */
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
//import scheduler from './notification/scheduler';
import registerRouter from "./authentication/routes/register-route";
import loginRouter from "./authentication/routes/login-route";
import edituserRouter from "./user/routes/edituser-route";
import listuserRouter from "./user/routes/listuser-route";
import listalluserRouter from "./user/routes/listalluser-route";
import deleteuserRouter from "./user/routes/deleteuser-route";
import createteamRouter from "./team/routes/createteam-route";
import editteamRouter from "./team/routes/editteam-route";
import listteamRouter from "./team/routes/listteam-route";
import listmyteamRouter from "./team/routes/listmyteam-route";
import deleteteamRouter from "./team/routes/deleteteam-route";
import listbatchRouter from "./batch/routes/listbatch-route";
import listmybatchRouter from "./batch/routes/listmybatch-route";
import createbatchRouter from "./batch/routes/createbatch-route";
import editbatchRouter from "./batch/routes/editbatch-route";
import deletebatchRouter from "./batch/routes/deletebatch-route";
import avataruploadRouter from "./user/routes/avatar-route";
import createresourceRouter from "./resource/routes/createresource-route";
import deleteresourceRouter from "./resource/routes/deleteresource-route";
import listresourceRouter from "./resource/routes/listresource-route";
import createeventRouter from "./event/routes/createevent-route";
import listeventRouter from "./event/routes/listevent-route";
import deleteeventRouter from "./event/routes/deleteevent-route";
import createassignmentRouter from "./assignment/routes/createassignment-route";
import listassignmentRouter from "./assignment/routes/listassignment-route";
import deleteassignmentRouter from "./assignment/routes/deleteassignment-route";
import createannouncementRouter from "./announcement/routes/createannouncement-route";
import listannouncementRouter from "./announcement/routes/listannouncement-route";
import deleteannouncementRouter from "./announcement/routes/deleteannouncement-route";
import listStudents from "./user/routes/liststudents-route";
import Authentication from "./utils/check-token";
const app = express();
var allowCrossDomain = {
    Origin: '*',
    method: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(express.json());
app.use(cors(allowCrossDomain));
const uri = "mongodb+srv://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASS +
    "@" +
    process.env.DB_HOST +
    "/" +
    process.env.DB_NAME;
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to DB."))
    .catch((error) => console.log(error));
app.use("/api/pesto/register", registerRouter);
app.use("/api/pesto/login", loginRouter);
app.use(Authentication);
/*Admin Screen Routers */
app.use("/api/pesto/list/user", listuserRouter);
app.use("/api/pesto/list/user/all", listalluserRouter);
app.use("/api/pesto/list/students", listStudents);
app.use("/api/pesto/edit/user", edituserRouter);
app.use("/api/pesto/delete/user", deleteuserRouter);
app.use("/api/pesto/list/team", listteamRouter);
app.use("/api/pesto/list/myteam", listmyteamRouter);
app.use("/api/pesto/create/team", createteamRouter);
app.use("/api/pesto/edit/team", editteamRouter);
app.use("/api/pesto/delete/team", deleteteamRouter);
app.use("/api/pesto/list/batch", listbatchRouter);
app.use("/api/pesto/list/mybatch", listmybatchRouter);
app.use("/api/pesto/create/batch", createbatchRouter);
app.use("/api/pesto/edit/batch", editbatchRouter);
app.use("/api/pesto/delete/batch", deletebatchRouter);
/*Resource Upload Routers*/
app.use("/api/pesto/avatar/upload", avataruploadRouter);
app.use("/api/pesto/resource/upload", createresourceRouter);
app.use("/api/pesto/resource/delete", deleteresourceRouter);
app.use("/api/pesto/resource/list", listresourceRouter);
/*Event  Upload Routers*/
app.use("/api/pesto/create/event", createeventRouter);
app.use("/api/pesto/list/event", listeventRouter);
app.use("/api/pesto/delete/event", deleteeventRouter);
/* Assigment Routers */
app.use("/api/pesto/create/assignment", createassignmentRouter);
app.use("/api/pesto/list/assignment", listassignmentRouter);
app.use("/api/pesto/delete/assignment", deleteassignmentRouter);
/* Announcement Routers */
app.use("/api/pesto/create/announcement", createannouncementRouter);
app.use("/api/pesto/list/announcement", listannouncementRouter);
app.use("/api/pesto/delete/announcement", deleteannouncementRouter);
//scheduler.start();
const serverListen = app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started Successfully");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dFQUNnRTtBQUVoRSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2hCLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ2hDLG1EQUFtRDtBQUNuRCxPQUFPLGNBQWMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRSxPQUFPLFdBQVcsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RCxPQUFPLGNBQWMsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLGNBQWMsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLGlCQUFpQixNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxnQkFBZ0IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLGNBQWMsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLGNBQWMsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLGdCQUFnQixNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxlQUFlLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxpQkFBaUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sZUFBZSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxrQkFBa0IsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLG9CQUFvQixNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9B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