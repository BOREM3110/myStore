import { Request, Response } from "express";
import multer = require("multer");
import { extname } from 'path';


export const fileUpload = async (req: Request, res: Response)  => {
    const storage = multer.diskStorage({
        destination: './uploads',
        filename(_, file, cb){
            const randomName = Math.random().toString(20).substring(2, 12)
            return cb(null, `${randomName}${extname(file.originalname)}`)
        }
    })
  const upload = multer({ storage }).single('image')
      
  return upload;
    
};