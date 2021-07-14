import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import aws from 'aws-sdk'
import multer from "multer"
import multerS3 from "multer-s3"

interface Callback<T> {
    (error: Error): void;
    (error: null, value: T): void;
  }

const s3 = new aws.S3({
    accessKeyId:process.env.ACCESS_KEY,
    secretAccessKey:process.env.SECRET_KEY,
    region:process.env.REGION,
});

const profileImgUpload = multer({
    storage: multerS3({
     s3: s3,
     bucket:'pestomeet-recordings',
     key: function (req, file, cb:Callback<string>) {
      cb(null,process.env.PROFILE_FOLDER+'/'+path.basename( file.originalname, path.extname( file.originalname ) )+ path.extname( file.originalname ) )
     }
    }),
    limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
    fileFilter: function( req, file, cb:multer.FileFilterCallback ){
    checkFileType( file, cb);
    }
   }).single('profileImage');
   
function checkFileType( file:any, cb:multer.FileFilterCallback){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
    // Check mime
    const mimetype = filetypes.test( file.mimetype );
   if( mimetype && extname ){
     return cb( null, true );
    } else {
     cb(null,false );
    }
   }

export default profileImgUpload