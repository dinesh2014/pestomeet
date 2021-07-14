import listUser from '../schema/user-schema'
import {message} from '../../utils/response-format'
import profileImgUpload from '../../utils/s3-upload'


const AvatarController =(request:any,response:any)=>{
    
    profileImgUpload( request, response, ( error ) => {
        if( error ){
         response.json( { error: error } );
        } else {
         // If File not found
         if( request.file === undefined ){
          response.json( 'Error: No File Selected' );
         } else {
          // If Success
          const imageName = request.file
      // Save the file name into database into profile model
      response.json( {
           imageURL: imageName.location
          } );
         }
        }
       });
  
}

export default AvatarController;