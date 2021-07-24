import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
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
import createassignmentRouter from "./assignments/routes/createassignment-route"
import listassignmentRouter from "./assignments/routes/listassignment-route"
import deleteassignmentRouter from "./assignments/routes/deleteassignment-route"
import Authentication from "./utils/check-token";

const app = express();
var allowCrossDomain = {
  Origin:'*',
  method:['GET','PUT','POST','DELETE','PATCH'],
  allowedHeaders:['Content-Type','Authorization']
}

app.use(express.json());
app.use(cors(allowCrossDomain));

const uri =
  "mongodb+srv://" +
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

//app.use(Authentication)

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

/* Assigment Routers */
app.use("/api/pesto/create/assignments", createassignmentRouter);
app.use("/api/pesto/list/assignments", listassignmentRouter);
app.use("/api/pesto/delete/assignments", deleteassignmentRouter);


scheduler.start();

const serverListen = app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started Successfully");
});

