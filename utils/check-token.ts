require('dotenv').config()
import jwt, { Secret } from 'jsonwebtoken';
import createError from 'http-errors'
import { message } from "./response-format";

function CheckToken(req:any,res:any,next:any){
  try{
  const token = req.headers["Authorization"];
  if(token){
    console.log(token)
    const authToken = token.split(' ')[1];
    const key = process.env.JWT_SECRET as Secret;
    let payload = jwt.verify(authToken,key,(error:any,user:any)=>{
        if (error) {
            return res.json(message("Authentication Failed" , error , false));
        }
        req.user = user;
        next();
    });
}else{
    return res.json(message("Please Login" , null , false));
}
}catch{
    return res.json(message("Authentication Error" , null , false));
}
}


export default CheckToken;