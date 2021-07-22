import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import scheduler from './notification/scheduler';
import registerRouter from "./authentication/routes/register-route";
import loginRouter from "./authentication/routes/login-route";
import edituserRouter from "./user/routes/edituser-route";
import listuserRouter from "./user/routes/listuser-route";
import listalluserRouter from "./user/routes/listalluser-route";
import deleteuserRouter from "./user/routes/deleteuser-route";
import createteamRouter from "./team/routes/createteam-route";
import editteamRouter from "./team/routes/editteam-route";
import listteamRouter from "./team/routes/listteam-route";
import deleteteamRouter from "./team/routes/deleteteam-route";
import listbatchRouter from "./batch/routes/listbatch-route";
import createbatchRouter from "./batch/routes/createbatch-route";
import editbatchRouter from "./batch/routes/editbatch-route";
import deletebatchRouter from "./batch/routes/deletebatch-route";
import avataruploadRouter from "./user/routes/avatar-route";
import createresourceRouter from "./resources/routes/createresource-route";
import deleteresourceRouter from "./resources/routes/deleteresource-route";
import listresourceRouter from "./resources/routes/listresource-route";
import createeventRouter from "./event/routes/createevent-route";
import listeventRouter from "./event/routes/listevent-route";
import deleteeventRouter from "./event/routes/deleteevent-route";
import Authentication from "./utils/check-token";
const app = express();
var allowCrossDomain = {
    Origin: '*',
    method: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: 'Content-Type ,'
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
app.use("/api/pesto/edit/user", edituserRouter);
app.use("/api/pesto/delete/user", deleteuserRouter);
app.use("/api/pesto/list/team", listteamRouter);
app.use("/api/pesto/create/team", createteamRouter);
app.use("/api/pesto/edit/team", editteamRouter);
app.use("/api/pesto/delete/team", deleteteamRouter);
app.use("/api/pesto/list/batch", listbatchRouter);
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
scheduler.start();
const serverListen = app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started Successfully");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRTlCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxTQUFTLE1BQU0sMEJBQTBCLENBQUM7QUFDakQsT0FBTyxjQUFjLE1BQU0sd0NBQXdDLENBQUM7QUFDcEUsT0FBTyxXQUFXLE1BQU0scUNBQXFDLENBQUM7QUFDOUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxpQkFBaUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLGdCQUFnQixNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxnQkFBZ0IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLGVBQWUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sZUFBZSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxrQkFBa0IsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLG9CQUFvQixNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sb0JBQW9CLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxrQkFBa0IsTUFBTSx1Q0FBdUMsQ0FBQztB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