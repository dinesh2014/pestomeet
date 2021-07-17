import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
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
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
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
//app.use(authMiddleware)
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
const serverListen = app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started Successfully");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBRTlCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFDaEMsT0FBTyxjQUFjLE1BQU0sd0NBQXdDLENBQUM7QUFDcEUsT0FBTyxXQUFXLE1BQU0scUNBQXFDLENBQUM7QUFDOUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxpQkFBaUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLGdCQUFnQixNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxnQkFBZ0IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLGVBQWUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sZUFBZSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdELE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxrQkFBa0IsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLG9CQUFvQixNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sb0JBQW9CLE1BQU0seUNBQXlDLENBQUM7QUFFM0UsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFL0IsTUFBTSxHQUFHLEdBQ1AsZ0JBQWdCO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUNuQixHQUFHO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQ25CLEdBQUc7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDbkIsR0FBRztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ3RCLFFBQVE7S0FDTCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUNqRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQzNDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRXhDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUV6Qyx5QkFBeUI7QUFFekIseUJBQXlCO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRXRELDJCQUEyQjtBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDeEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUU1RCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDIn0=