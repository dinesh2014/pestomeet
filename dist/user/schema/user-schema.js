import mongoose from 'mongoose';
import { DB_USER_MODEL } from '../../utils/app-constants';
const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    role: { type: String, required: true },
    password: { type: String, require: true },
    experience: { type: String, require: true },
    approval: { type: String, require: true }
});
const userModel = mongoose.model(DB_USER_MODEL, userSchema);
export default userModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi91c2VyL3NjaGVtYS91c2VyLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVEsTUFBTSxVQUFVLENBQUE7QUFDL0IsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFBO0FBY3ZELE1BQU0sVUFBVSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBUTtJQUM1QyxFQUFFLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFHLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDaEMsSUFBSSxFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRyxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ2xDLE1BQU0sRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUM7SUFDcEIsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ25DLEtBQUssRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUcsUUFBUSxFQUFDLElBQUksRUFBQztJQUNuQyxJQUFJLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFHLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDbEMsUUFBUSxFQUFDLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDO0lBQ25DLFVBQVUsRUFBQyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQztJQUNyQyxRQUFRLEVBQUMsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUM7Q0FDcEMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0QsZUFBZSxTQUFTLENBQUMifQ==