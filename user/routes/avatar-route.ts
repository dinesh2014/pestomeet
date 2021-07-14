import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import aws from 'aws-sdk'
import multer from "multer"
import multerS3 from "multer-s3"
import avatarController from '../controller/avatar-controller'

const avatarRouter= express.Router()


avatarRouter.post('/:id',avatarController)

export default avatarRouter;
