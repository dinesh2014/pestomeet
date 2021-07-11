import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import registerRouter from './authentication/routes/register-route';
import loginRouter from './authentication/routes/login-route';
import edituserRouter from './user/routes/edituser-route';
import listuserRouter from './user/routes/listuser-route';
import deleteuserRouter from './user/routes/deleteuser-route';
import createteamRouter from './team/routes/createteam-route';
import editteamRouter from './team/routes/editteam-route';
import listteamRouter from './team/routes/listteam-route';
import deleteteamRouter from './team/routes/deleteteam-route';
import listbatchRouter from './batch/routes/listbatch-route';
import createbatchRouter from './batch/routes/createbatch-route';
import editbatchRouter from './batch/routes/editbatch-route';
import deletebatchRouter from './batch/routes/deletebatch-route';
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + "/" + process.env.DB_NAME;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to DB."))
    .catch(error => console.log(error));
app.use('/api/pesto/register', registerRouter);
app.use('/api/pesto/login', loginRouter);
//app.use(authMiddleware)
/*Admin Screen Routers */
app.use('/api/pesto/list/user', listuserRouter);
app.use('/api/pesto/edit/user', edituserRouter);
app.use('/api/pesto/delete/user', deleteuserRouter);
app.use('/api/pesto/list/team', listteamRouter);
app.use('/api/pesto/create/team', createteamRouter);
app.use('/api/pesto/edit/team', editteamRouter);
app.use('/api/pesto/delete/team', deleteteamRouter);
app.use('/api/pesto/list/batch', listbatchRouter);
app.use('/api/pesto/create/batch', createbatchRouter);
app.use('/api/pesto/edit/batch', editbatchRouter);
app.use('/api/pesto/delete/batch', deletebatchRouter);
const serverListen = app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started Successfully');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFLLFFBQVEsQ0FBQTtBQUMxQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDZixPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUE7QUFFN0IsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFBO0FBQ3ZCLE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQTtBQUMvQixPQUFPLGNBQWMsTUFBTSx3Q0FBd0MsQ0FBQTtBQUNuRSxPQUFPLFdBQVcsTUFBTSxxQ0FBcUMsQ0FBQTtBQUM3RCxPQUFPLGNBQWMsTUFBTSw4QkFBOEIsQ0FBQTtBQUN6RCxPQUFPLGNBQWMsTUFBTSw4QkFBOEIsQ0FBQTtBQUN6RCxPQUFPLGdCQUFnQixNQUFNLGdDQUFnQyxDQUFBO0FBQzdELE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUE7QUFDN0QsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUE7QUFDekQsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUE7QUFDekQsT0FBTyxnQkFBZ0IsTUFBTSxnQ0FBZ0MsQ0FBQTtBQUM3RCxPQUFPLGVBQWUsTUFBTSxnQ0FBZ0MsQ0FBQTtBQUM1RCxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFBO0FBQ2hFLE9BQU8sZUFBZSxNQUFNLGdDQUFnQyxDQUFBO0FBQzVELE9BQU8saUJBQWlCLE1BQU0sa0NBQWtDLENBQUE7QUFHaEUsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUN2QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFFM0IsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsR0FBRyxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFDLEdBQUcsR0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxHQUFHLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUE7QUFDeEgsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBQyxlQUFlLEVBQUUsSUFBSSxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO0tBQzNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDM0MsS0FBSyxDQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBRS9DLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsY0FBYyxDQUFDLENBQUE7QUFDN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxXQUFXLENBQUMsQ0FBQTtBQUV2Qyx5QkFBeUI7QUFFekIseUJBQXlCO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUMsY0FBYyxDQUFDLENBQUE7QUFDOUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxjQUFjLENBQUMsQ0FBQTtBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxjQUFjLENBQUMsQ0FBQTtBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxjQUFjLENBQUMsQ0FBQTtBQUM5QyxHQUFHLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLGdCQUFnQixDQUFDLENBQUE7QUFDbEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBRSxJQUFJLEVBQUMsR0FBRSxFQUFFO0lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMxQyxDQUFDLENBQUMsQ0FBQSJ9